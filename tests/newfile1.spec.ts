import { test,expect } from "@playwright/test";
import { Utility } from "../pages/utility";
import { Buttons } from "../pages/buttons";
import { Textbox } from "../pages/textbox";
import { Uploaddownload } from "../pages/uploaddownload";
import { Draganddrop } from "../pages/draganddrop";
import { Mousehover } from "../pages/mousehover";
import { url } from "inspector";
import { Brokenlinks } from "../pages/brokenlinks";
import { Myntra } from "../pages/myntra";
import { Alerts } from "../pages/alerts";
import * as XLSX from "xlsx" // import the excel file
import jsondata from "../textdata/check1.json"//imported json file.
const workbook=XLSX.readFile('textdata/textbox.xlsx')// read the excel and give the path
const sheet=workbook.SheetNames[0]// reading the sheet
const sheetname=workbook.Sheets[sheet]
const testdata=XLSX.utils.sheet_to_json(sheetname)// excel COVERTING JSON FILE
test('@alert alertchecking',async({page})=>{
    const utility=new Utility(page)
    await  utility.launchurl("https://demoqa.com/alerts");
    const alerts=new Alerts(page)
    await alerts.alerts();
    await page.pause()
})

test('@click clickactions',async({page})=>{
    const utility=new Utility(page)
    const buttons=new Buttons(page)
    await utility.launchurl("https://demoqa.com/buttons");
    await buttons.buttonclick();

    await page.pause()
})
//grouping and tagging @upload
//to run specific data we use slice method
testdata.slice(1,3).forEach((data:any,index:number)=>{
test(`@text  @upload text and clear ${index} `,async({page})=>{
    const utility= new Utility(page)
    const textbox=new Textbox(page)
    await utility.launchurl("https://demoqa.com/text-box")
    await textbox.textandclear(data.fullname,data.email,data.currentaddress,data.permanentaddress)// run with multiple dataset taken from excelsheet
    await page.pause()
});
}
)
jsondata.slice(1,3).forEach((data:any,index:number)=>{
test(`@json @text  @upload text and clear jsondata ${index} `,async({page})=>{
    const utility= new Utility(page)
    const textbox=new Textbox(page)
    await utility.launchurl("https://demoqa.com/text-box")
    await textbox.textandclear(data.fullname,data.email,data.currentaddress,data.permanentaddress)// run with multiple dataset taken from excelsheet
    await page.pause()
});
}
)
/*test('upload and download', async({page})=>{
        const uploaddownload= new Uploaddownload(page)
        const utility = new Utility(page)
        await utility.launchurl("https://demoqa.com/upload-download");
        await uploaddownload.uploaddownload('tests/example.spec.ts');
        await page.pause()
})
test('drag and drop', async({page})=>{
        const draganddrop= new Draganddrop(page)
        const utility = new Utility(page)
        await utility.launchurl("https://demoqa.com/droppable");
        await draganddrop.draganddrop()
        await page.pause()
})
test('mousehover',async({page})=>{
    const mousehover= new Mousehover(page)
    const utility=new Utility(page)
    await utility.launchurl("http://uitestingplayground.com/mouseover");
    await mousehover.mousehover()
    await page.pause()
})
test('scrolling',async({page})=>{
    const mousehover= new Mousehover(page)
    const utility=new Utility(page)
    
    await utility.launchurl("https://demoqa.com/tool-tips");
    //await mousehover.mousehover()
    await mousehover.scrolling()
    await page.pause()
}
)
test('broken links',async({page})=>{
    const utility= new Utility(page)
    const brokenlinks=new Brokenlinks(page)
    await utility.launchurl("https://demoqa.com/broken")    
    await brokenlinks.brokenlinks();
    await page.pause()
})
/*test('multiple pages',async({page})=>{
    const utility=new Utility(page)
    await utility.launchurl("https://www.myntra.com/women-kurtas-kurtis-suits")
    const myntra= new Myntra(page)
    let page2=  await myntra.Myntra()
  const myntra2=new Myntra(page2)
  await myntra2.Selectsize()
 await page.wa
})*/