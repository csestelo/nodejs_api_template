import request from 'supertest';
import app from '../../app'

// TODO: Follow issue -> https://github.com/facebook/jest/issues/10025

describe('GET Healthcheck', () => {
    it('should return ok', async () => {
      const res = await request(app)
      .get('/healthcheck')

      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual({msg: "I'm UP!"})
    })
  })
  