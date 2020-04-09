const request = require('supertest')
const app = require('../../src/server')

describe('Base routes', () => {
  test('should respond to status ping', async () => {
    const response = await request(app).get('/ping').expect(200)
    expect(response.text).toBe('pong')
  })

  test('should redirect wildcard requests to index.html', async () => {
    const response = await request(app).get('/bsdf').expect(200)
    expect(response.text).not.toBeNull()
  })
})
