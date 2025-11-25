import { test,expect } from "@playwright/test";
import { Utility } from "../pages/utility";
import { Saucedemo } from "../pages/saucedemo";
import { Sdinventory } from "../pages/sdinventory";
import { Sdcart } from "../pages/sdcart";
test('Login with valid credentials',async({page})=>{
    const utility=new Utility(page);
    const saucedemo=new Saucedemo(page);
        await utility.launchurl("https://www.saucedemo.com/");
        await saucedemo.saucedemo("standard_user","secret_sauce");

      const inventory=new Sdinventory(page);
      let product1=await inventory.addproduct1()
      let product2=await inventory.addproduct2()
      let product3=await inventory.addproduct3()
      

   const cart=new Sdcart(page);
      await cart.sdcart(product1,product2,product3)
}
)