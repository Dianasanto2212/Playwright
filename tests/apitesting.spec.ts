import { test,expect,request } from "@playwright/test";
test('apitestingcheck',async()=>{
     let context= await request.newContext({
        baseURL:'https://reqres.in/',
        extraHTTPHeaders:{
            "x-api-key": "reqres-free-v1"
        }
     })
     let response= await context.get('api/users/1')
     console.log(response)
     let formattedresponse=await response.json()
     console.log(formattedresponse) 
     expect(response.status()).toBe(200)
     expect (formattedresponse.data.email).toBe('george.bluth@reqres.in')
}
)
test('apitestingcheck',async()=>{
     let context= await request.newContext({
        baseURL:'https://reqres.in/',
        extraHTTPHeaders:{
            "x-api-key": "reqres-free-v1"
        }
     })