const request = require('supertest')
const app = require('../index.js');

describe("GET /next", () => {

 
    test("Should return: Status 200", async () => {
      const response = await request(app).get("/next")
      expect(response.statusCode).toBe(200)
    })
  

  
    test("Should return: next Monday", async () => {
      const response = await request(app).get("/next")
      expect(response.text).toBe('2023-05-29')
    })
  

  
    test("Should return: true, because response text should be '2023-05-29'", async () => {
      const response = await request(app).get("/next")
      expect(response.text).not.toBe('2023-05-22')
    })
})
  

