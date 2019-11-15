const db = require('../data/dbConfig')
const Chefs = require('./chefs-model');

describe('chefs model', () => {
    beforeEach(async () => {
        await db('chefs').truncate();
    })


describe('GET /chefs', () => {
    it('return a status code of 200 OK', async () => {
        const response = await request(server).get('/chefs')
        expect(response.status).toBe(200)
    })
})

describe('POST /chefs', () => {
    it('should return the provided chef', async () => {
        await insert({first_name: 'Christopher', last_name: 'Kimball'})
        await insert({ first_name: 'April', last_name: 'Bloomfield'}) 

        const chefs = await db('chefs')

        expect(chefs).toHaveLength(2)
        expect(chefs[0].first_name).toBe('Christopher')
        expect(chefs[1].first_name).toBe('April')
    })
})

describe('DELETE /chefs/:id', () => {
    it('returns a status code 200 OK after deleted', async () => {
        const body = { first_name: 'test', last_name: 'test'}
        await Chefs.add(body);

        return request(server).delete('/chefs/1').then(res => {
            expect(res.status).toBe(200)
        })
    })
})
})