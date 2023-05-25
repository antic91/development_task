const request = require('supertest')
const app = require('../index.js');

describe("GET /last", () => {
   
  
    test("Should return: Status 200", async () => {
      const response = await request(app).get("/last")
      expect(response.statusCode).toBe(200)
    })
  

  
    test("Should return: last Monday", async () => {
      const response = await request(app).get("/last")
      expect(response.text).toBe('2023-05-22')
    })
  

    
    test("Should return: true, because response text should be '2023-05-22'", async () => {
      const response = await request(app).get("/last")
      expect(response.text).not.toBe('2023-05-29')
    })
  
  
})
