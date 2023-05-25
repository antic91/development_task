const request = require('supertest')
const app = require('../index.js');

describe("GET /", () => {


        test("Should return: Status 200", async () => {
        const response = await request(app).get("/2023-05-23")
        expect(response.statusCode).toBe(200)
        })
    
        
  
        test("Should return: The string is not a valid date format!!!", async () => {
        const response = await request(app).get("/asdas")
        expect(response.text).toBe('The string is not a valid date format!!!')
        })
    

   
        test("Should return: The string is not a valid date format!!!", async () => {
        const response = await request(app).get("/2022-12-12as")
        expect(response.text).toBe('The string is not a valid date format!!!')
        })
    
    
        
   
        test("Should return: Date Format should be YYYY-MM-DD!!!", async () => {
        const response = await request(app).get("/12.12.1222")
        expect(response.text).toBe('Date Format should be YYYY-MM-DD!!!')
        })
    
        
  
        test("Should return: The string is not a valid date format!!!", async () => {
        const response = await request(app).get("/12.May.2021")
        expect(response.text).toBe('Date Format should be YYYY-MM-DD!!!')
        })
    

  
        test("Should return: The string is not a valid date format!!!", async () => {
        const response = await request(app).get("/1.1.2023")
        expect(response.text).toBe('Date Format should be YYYY-MM-DD!!!')
        })
    


   
        test("Should return: 2023-05-01", async () => {
        const response = await request(app).get("/2023-05-01")
        expect(response.text).toBe('2023-05-01')
        })
    


   
        test("Should return: 2023-05-29", async () => {
        const response = await request(app).get("/2023-05-31")
        expect(response.text).toBe('2023-05-29')
        })
    

})
