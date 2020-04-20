import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
var path = require("path");
export class Assets {
    Assetslink() {
        return element(by.xpath("//div[contains(text(),'Assets Management')]"));
    }
    Createnewassetbtn() {
        return element(by.xpath("//span[contains(text(),'Create New Asset')]"));
    }
    typefile() {
        return element(by.xpath("//input[@type='file']"))
    }
    OKbtn() {
        return element(by.xpath("//button[text()='OK']"));
    }
    savebtn() {
        return element(by.xpath("//span[contains(text(),'Save')]"))
    }
    addbtn() {
        return element(by.xpath("//span[contains(text(),' Add + ')]"))
    }
    editicon() {
        return element(by.xpath("//img[@src='assets/images/Union.svg']"))
    }
    nametextbox() {
        return element(by.xpath("//input[@ng-reflect-name='assetName']"))
    }
    quantitytextbox() {
        return element(by.xpath("//input[@ng-reflect-name='quantity']"))
    }
    updatebtn(){
        return element(by.xpath("//span[contains(text(),'Update')]"))
    }
    cancelbtn(){
        return element(by.xpath("//span[contains(text(),'Cancel')]"))
    }
    Createassets() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/AssetData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//div[contains(text(),'Assets Management')]"));
                this.Assetslink().click();
                browser.sleep(2000);
                var Classsroomelection = by.xpath("//select//option[text()='" + record["Class"] + "']");
                browser.sleep(1000);
                BrowserUtils.clickOnElement(Classsroomelection);
                browser.sleep(1500);
                this.Createnewassetbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='assetName']"), record["name"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='quantity']"), record["quantity"]);
           this.addbtn().click();
           browser.sleep(1000);
           this.savebtn().click();
            })
        }

    }
    Updateassets(){
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/AssetData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                var Classsroomelection = by.xpath("//select//option[text()='" + record["Class"] + "']");
                browser.sleep(1000);
                BrowserUtils.clickOnElement(Classsroomelection);
                browser.sleep(1500);
                var editresource = by.xpath("//tr[@class='mat-row cdk-row ng-star-inserted']/td[contains(text(),'" + record["name"] + "')]/../td//img[@src='assets/images/Union.svg']");
                browser.sleep(1000);
                BrowserUtils.clickOnElement(editresource);
                browser.sleep(1500);
                  
            })
        } 
    }


}