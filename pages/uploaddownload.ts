import { Page,Locator } from "@playwright/test";
import path from "path";
export class Uploaddownload{
    page:Page
    download:Locator
    choosefile:Locator

    constructor(page:Page){
        this.page=page;
        this.download=page.getByRole('link', { name: 'Download', exact: true });
        this.choosefile=page.getByRole('button', { name: 'Select a file', exact: true })
    }
    public async uploaddownload(file:string){
        await this.choosefile.setInputFiles(file);
        const waitfordownload = this.page.waitForEvent('download');//added listener
        await this.download.click();
        const downloadedfile= await waitfordownload;//get details of file which is downloaded
        const filepath = path.join(__dirname,'mydownloads.ts')//save a file -file path
        await downloadedfile.saveAs(filepath)
    }
}