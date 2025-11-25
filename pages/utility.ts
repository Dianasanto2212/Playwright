import { Page,Locator } from "@playwright/test";
export class Utility{
    page:Page;
    constructor(page:Page){
        this.page=page

    }
    public async launchurl(url:any){
        await this.page.goto(url);
    
        
    }
}