const db = require('../data/dbConfig')
const { add } = require('./chefs-model');
const request = require('supertest');
const server = require('../api/server');


describe('chefs model', () => {
    beforeEach(async () => {
        await db('chefs').truncate();
    })



describe('GET /chefs', () => {
    it('return a status code of 200 OK', async () => {
        return request(server).get('/api/chefs').then(res => {
            expect(res.status).toBe(200)
        })
    })
    // it('returns an array of chefs', async () => {
    //     const response = await request(server).get('chefs')
    // })
})

describe('POST /chefs', () => {
    it('should return the provided chef', async () => {
        await add({first_name: 'Christopher', last_name: 'Kimball', company: 'Milk Street'})
        await add({ first_name: 'April', last_name: 'Bloomfield', company: 'A Girl and her Pig'}) 

        const chefs = await db('chefs')

        expect(chefs).toHaveLength(2)
        expect(chefs[0].first_name).toBe('Christopher')
        expect(chefs[1].first_name).toBe('April')
    })
    it('should return a status code of 201', () => {
        return request(server).post('/api/chefs')
        .send({ first_name: 'Christopher', last_name: 'Kimball', company: 'Milk Street'})
        .then(res => {
            expect(res.type).toMatch(/json/i)
            expect(res.status).toEqual(201)
        })
    })
})

describe('DELETE /chefs/:id', () => {
    it('returns a status code 200 OK after deleted', async () => {
        await request(server).post('/api/chefs')
        .send({ first_name: 'Christopher', last_name: 'Kimball', company: 'Milk Street'})

        const res = await request(server).del('/api/chefs/1')

        expect(res.type).toMatch(/json/i);
        expect(res.status).toEqual(200);

        })
    // it('should return "1" if deletion was successful', async () => {
    //     await request(server).post('/api/chefs')
    //         .send('1')

    //         const res = await request(server).del('/api/chefs/1')

    //         expect(res).toBe('1')
    // })
    })
})
