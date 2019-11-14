const request = require('supertest');

const server = require('./server');

it("should set db environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe('server', () => {
      describe('GET /', () => {
          it('should return 200 OK', () => {
              return request(server)
              .get('/')
              .then(res => {
                  expect(res.status).toBe(200)
              })
          })
      })
  })

  it('should return JSON formatted response', () => {
      return request(server)
      .get('/')
      .then(res => {
          expect(res.type).toMatch(/json/i)
      })
  })

  it('shour return this JSON formatted body', () => {
      return request(server)
      .get('/')
      .then(res => {
          // expect(res.body).toEqual({ api: 'up' })
          expect(res.body.api).toBe('up')
      })
  })