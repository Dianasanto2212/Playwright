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
test('apitestingdelete',async()=>{
     let context= await request.newContext({
        baseURL:'https://reqres.in/',
        extraHTTPHeaders:{
            "x-api-key": "reqres-free-v1"
        }
     })
     let response=await context.delete('api/users/1')
     expect(response.status()).toBe(204) 
    })
    test('apitestingpost',async()=>{
     let context= await request.newContext({
        baseURL:'https://reqres.in/',
        extraHTTPHeaders:{
            "x-api-key": "reqres-free-v1"
        }
     })
let response=await context.post("api/users",{
data:{
    "email": 'sureka@gmail.com',
    "first_name": 'Trainer',
}
})
expect(response.status()).toBe(201)
    })
    test('apitestingput',async()=>{
     let context= await request.newContext({
        baseURL:'https://reqres.in/',
        extraHTTPHeaders:{
            "x-api-key": "reqres-free-v1"
        }
     })
let response=await context.put("api/users/1",{
data:{
    "email": 'sureka@gmail.com',
    "first_name": 'Trainer',
}
})
expect(response.status()).toBe(200)
    })