const request = require('supertest')
const app = require('../index.js');

// Describe a test suite for the "GET /last" endpoint

describe("GET /last", () => {
   
    // Test case: Should return Status 200
    test("Should return: Status 200", async () => {
      const response = await request(app).get("/last")
      expect(response.statusCode).toBe(200)
    })
  

    // Test case: Should return "last Monday"
    test("Should return: last Monday", async () => {
      const response = await request(app).get("/last")
      expect(response.text).toBe('2023-05-22')
    })
  

    // Test case: Should return true, because the response text should not be '2023-05-29'
    test("Should return: true, because response text should be '2023-05-22'", async () => {
      const response = await request(app).get("/last")
      expect(response.text).not.toBe('2023-05-29')
    })
  
  
})
