import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
var path = require("path");
export class Resources {
    Resourcelink() {
        return element(by.xpath("//a[@ng-reflect-router-link='/resources']/div[contains(text(),'Resources')]"));
    }
    Createnewresourcebtn() {
        return element(by.xpath("//span[contains(text(),'CREATE NEW RESOURCE')]"));
    }
    Classradiobtn() {
        return element(by.xpath("//div[@class='mat-radio-label-content'][contains(text(),'Class')]"));
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
    Createresources() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ResourceData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//a[@ng-reflect-router-link='/resources']/div[contains(text(),'Resources')]"));
                this.Resourcelink().click();
                browser.sleep(2000);
                //Audio
                this.Createnewresourcebtn().click();
                browser.sleep(2000);
                var Classselection = by.xpath("//p[@class='radio-number'][contains(text(),'" + record["Class"] + "')]");
                browser.sleep(1000);
                BrowserUtils.clickOnElement(Classselection);
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["Subject"]);
                browser.sleep(500);
                this.Classradiobtn().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["Title"]);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["Description"]);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile().sendKeys(audioPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(500);
                this.savebtn().click();
                browser.sleep(2000);
                //Video
                this.Createnewresourcebtn().click();
                browser.sleep(2000);
                var Classselection = by.xpath("//p[@class='radio-number'][contains(text(),'" + record["Class"] + "')]");
                browser.sleep(1000);
                BrowserUtils.clickOnElement(Classselection);
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["Subject"]);
                browser.sleep(500);
                this.Classradiobtn().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["VideoTitle"]);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["VideoDescription"]);
                var path2 = "../../TestData/VideoFiles/Train.mp4"
                var videoPath = path.resolve(__dirname, path2);
                this.typefile().sendKeys(videoPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(500);
                this.savebtn().click();
                browser.sleep(2000);
                //PDF
                this.Createnewresourcebtn().click();
                browser.sleep(2000);
                var Classselection = by.xpath("//p[@class='radio-number'][contains(text(),'" + record["Class"] + "')]");
                browser.sleep(1000);
                BrowserUtils.clickOnElement(Classselection);
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["Subject"]);
                browser.sleep(500);
                this.Classradiobtn().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["pdfTitle"]);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["pdfDescription"]);
                var path2 = "../../TestData/PDF/pdf1mb.pdf"
                var pdfPath = path.resolve(__dirname, path2);
                this.typefile().sendKeys(pdfPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(500);
                this.savebtn().click();
            })
        }

    }

}