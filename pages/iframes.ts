import { Page,Locator, expect } from "@playwright/test";
export class Iframes{
    page:Page
    samplepage:Locator

    constructor(page:Page){
        this.page=page;
        this.samplepage=page.frameLocator('[id="frame1"]').locator('[id="sampleHeading"]')//we need to add framelocatorfirst then locator
    }

}

