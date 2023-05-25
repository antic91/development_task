const request = require('supertest')
const app = require('../index.js');

// Describe a test suite for the "GET /next" endpoint
describe("GET /next", () => {

    // Test case: Should return Status 200
    test("Should return: Status 200", async () => {
      const response = await request(app).get("/next")
      expect(response.statusCode).toBe(200)
    })
  

    // Test case: Should return "next Monday"
    test("Should return: next Monday", async () => {
      const response = await request(app).get("/next")
      expect(response.text).toBe('2023-05-29')
    })
  

    // Test case: Should return true, because the response text should not be '2023-05-22'
    test("Should return: true, because response text should be '2023-05-29'", async () => {
      const response = await request(app).get("/next")
      expect(response.text).not.toBe('2023-05-22')
    })
})
  

