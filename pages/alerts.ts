import { Page,Locator, expect } from "@playwright/test";
export class Alerts{
    page:Page
    seealert:Locator
    alert5sec:Locator
    confirmbox:Locator
    promptbox:Locator

    constructor(page:Page){
        this.page=page;
        this.seealert=page.locator('[id="alertButton"]')
        this.alert5sec=page.locator('[id="timerAlertButton"]')
        this.confirmbox=page.locator('[id="confirmButton"]')
        this.promptbox=page.locator('[id="promtButton"]')
    }
    public async alerts(){
        //this is listener only once it will appear n number of times needed use on instaed of once
        this.page.once('dialog',async dialog =>{
          await dialog.accept()
                  })
                  await this.seealert.click();
              this.page.once('dialog',async dialog =>{
          await dialog.dismiss()
                  })  
                  await this.confirmbox.click();  
                  await this.page.screenshot({path:'screenshots/screenshot1.png'}) //for only capturing screenshot for particular action
     this.page.once('dialog',async dialog =>{
          await dialog.accept('accepting')
                  })
          await this.promptbox.click();        
    }
}