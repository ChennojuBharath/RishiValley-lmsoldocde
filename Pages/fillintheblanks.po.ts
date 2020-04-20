import { browser, by, element, Key, WebElement, $ } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider';
import { coursePage } from '../Pages/coursePage.po';
var path = require("path");
let coursePg: coursePage
coursePg = new coursePage();
export class fillintheblanksPage {
   createNewTaskBtn() {
      return element(by.xpath("//span[text()=' CREATE NEW TASK ']"));
   }
   fillintheblanksLink() {
      return element(by.xpath("//mat-card-title[@class='title-link mat-card-title'][text()='Fill in the blanks']"));
   }
   selectSubject() {
      return element(by.xpath('//select[@name="subjectNames"]'));
   }
   EnglishSubject() {
      return element(by.xpath("//span[text()='ENGLISH']"));
   }
   Tasklink() {
      return element(by.xpath("(//a[@class='task-link'])[1]"));
   }
   addSlide() {
      return element(by.xpath("//span[text()='ADD SLIDE + ']"));
   }
   clickOntappingMCQNextBtn() {
      return element(by.xpath("//span[contains(text(),'Next')]"))
   } 
   Backbtn() {
      return element(by.xpath("//mat-icon[text()='chevron_left']"))
  }
  Previewbreadcrumb() {
   return element(by.xpath("//a[@class='nav-link ng-star-inserted'][text()=' Preview']"))
}
   Fillintheblanksbreadcrumb() {
      return element(by.xpath("//a[@class='nav-link ng-star-inserted'][text()=' Fill In The Blanks']"))
  }
Class1() {
   return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']//div[text()='Class 1 ']"));
}
   Taskcancelbtn() {
      return element(by.xpath("//span[text()='Cancel']"));
  }
   Norecored() {
      return element(by.xpath("//td[text()=' No record found. ']"));
  }
   plusbutton() {
      return element(by.xpath("//button[text()='+']"));
   }
   overallFeedbackCheckbox() {
      return element(by.xpath("//div[@class='task-head']//input[@type='checkbox']"));
   }
   Activityid() {
      return element(by.xpath("//input[@id='activityid']"));
   }
   sliderTextBox() {
      return element(by.xpath("//input[@ng-reflect-name='feedbackInfo']"));
   }
   slider() {
      return element(by.xpath("//div[@class='mat-slider-thumb']"));
   }
   Instructions() {
      return element(by.xpath("//textarea[@ng-reflect-name]"));
   }
   Behaviourtext() {
      return element(by.xpath("//div[text()='Behaviour ']"));
   }
   feedbackbox() {
      return element(by.xpath("//input[@formcontrolname='feedbackInfo']"));
   }
   feedbackbox1() {
      return element(by.xpath("(//input[@formcontrolname='feedbackInfo'])[1]"));
   }
   feedbackbox2() {
      return element(by.xpath("(//input[@formcontrolname='feedbackInfo'])[2]"));
   }
   feedbackbox3() {
      return element(by.xpath("(//input[@formcontrolname='feedbackInfo'])[3]"));
   }
   feedbackbox4() {
      return element(by.xpath("(//input[@formcontrolname='feedbackInfo'])[4]"));
   }
   publishBtn() {
      return element(by.xpath("//span[contains(text(),'Send To Review')]"))
   }
   succesfulCreationOfTasks() {
      return element(by.xpath("//span[text()='Home']"))
   }
   Audiobutton() {
      return element(by.xpath("//div[.='Upload Audio File']"));
   }
   Addbtn() {
      return element(by.xpath("//button[@class='addButton']"));
   }
   AddQuestionbtn() {
      return element(by.xpath("//span[text()='ADD Question +']"))
   }
   AddQuestionbtn2() {
      return element(by.xpath("(//span[text()='ADD Question +'])[2]"))
   }
   Checkbtn() {
      return element(by.xpath("//span[text()='CHECK']"))
   }
   ShowSolutionbtn() {
      return element(by.xpath("//span[text()='SHOW SOLUTION']"))
   }
   Imagesource1() {
      return element(by.xpath("(//div[@class='choice-cls']/button/div[@class='mat-button-focus-overlay'])[1]"))
   }
   Imagesource2() {
      return element(by.xpath("(//div[@class='choice-cls']/button/div[@class='mat-button-focus-overlay'])[2]"))
   }
   Imagesource3() {
      return element(by.xpath("(//span[@class='dynamic-render']/input)[1]"))
   }
   Imagesource4() {
      return element(by.xpath("(//span[@class='dynamic-render']/input)[2]"))
   }
   Imagedestination1() {
      return element(by.xpath("(//span[@class='dynamic-render'])[1]"))
   }
   Imagedestination2() {
      return element(by.xpath("(//input[@value])[2]"))
   }
   OKbtn() {
      return element(by.xpath('//button[.="OK"]'));
   }
   Previewheader() {
      return element(by.xpath("//div[text()=' PREVIEW ']"))
   }
   Imageplaceholder1() {
      return element(by.xpath("(//app-upload-media)[1]"))
   }
   Imageplaceholder2() {
      return element(by.xpath("(//app-upload-media)[2]"))
   }
   Imageplaceholder3() {
      return element(by.xpath("(//app-upload-media)[3]"))
   }
   Imageplaceholder4() {
      return element(by.xpath("(//app-upload-media)[4]"))
   }
   Imageplaceholder5() {
      return element(by.xpath("(//app-upload-media)[5]"))
   }
   typefile1() {
      return element(by.css('input[type="file"]'))
   }
   typefile2() {
      return element(by.xpath("(//input[@type='file'])[2]"))
   }
   typefile3() {
      return element(by.xpath("(//input[@type='file'])[3]"))
   }
   typefile4() {
      return element(by.xpath("(//input[@type='file'])[4]"))
   }
   typefile5() {
      return element(by.xpath("(//input[@type='file'])[5]"))
   }
   typefile6() {
      return element(by.xpath("(//input[@type='file'])[6]"))
   }
   typefile7() {
      return element(by.xpath("(//input[@type='file'])[7]"))
   }
   typefile8() {
      return element(by.xpath("(//input[@type='file'])[8]"))
   }
   textbox1() {
      return element(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[1]"))
   }
   textbox2() {
      return element(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[2]"))
   }
   textbox3() {
      return element(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[3]"))
   }
   textbox4() {
      return element(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[4]"))
   }
   textbox5() {
      return element(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[5]"))
   }
   textbox6() {
      return element(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[6]"))
   }
   textbox7() {
      return element(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[7]"))
   }
   textbox8() {
      return element(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[8]"))
   }
   Deletebtn() {
      return element(by.xpath("//span[text()='DELETE']"))
   }
   Deleteoption4() {
      return element(by.xpath("//span[@mattooltip='Remove Question'])[4]"))
   }
   Deleteoption8() {
      return element(by.xpath("//span[@mattooltip='Remove Question'])[8]"))
   }
   Deleteslide() {
      return element(by.xpath("(//span[@mattooltip='Remove Slide'])[2]"))
   }
   saveMCQ() {
      return element(by.xpath("//span[contains(text(),'Save')]"))
   }
   acceptSaveTaskPopUp() {
      return element(by.xpath("//button[text()='OK']"))
   }
   okbutton() {
      return element(by.xpath("//button[text()='OK']"))
   }
   Insertimage() {
      return element(by.xpath("//button/span[text()='Insert Image +']"))
   }
   Insertimage2() {
      return element(by.xpath("(//button/span[text()='Insert Image +'])[2]"))
   }
   ClickonRandomArray() {
      var myArray = ['FillintheBlanks1a', 'FillintheBlanks1.1a', 'FillintheBlanks1.2a', 'FillintheBlanks1.3a', 'FillintheBlanks1.4a', 'FillintheBlanks1.5a', 'FillintheBlanks1.6a', 'FillintheBlanks2.0a', 'FillintheBlanks2.1s', 'FillintheBlanks2.s2', 'FillintheBlanks2.s3', 'FillintheBlanks2.4s', 'FillintheBlanks2f.5', 'FillintheBlanks2.6g', 'FillintheBlanks3.0g', 'FillintheBlanks3.1g', 'FillintheBlanks3.2g', 'FillintheBlanks3.g3', 'FillintheBlanks3.4g', 'FillintheBlanks3.g5', 'FillintheBlanks3.6g', 'FillintheBlanks4.1g', 'FillintheBlanks4.1g', 'FillintheBlanks4.2g', 'FillintheBlanks4.3g', 'FillintheBlanks4.4g', 'FillintheBlanks4.g5', 'FillintheBlanks4.g6', 'FillintheBlanks5.g0', 'FillintheBlanks5.g1', 'FillintheBlanks5.g2', 'FillintheBlanks5.d3', 'FillintheBlanks5.4d', 'FillintheBlanks5.d5', 'FillintheBlanks5.d6', 'FillintheBlanks6.d0', 'FillintheBlanks6.d1', 'FillintheBlanks6.d2', 'FillintheBlanks6.w3', 'FillintheBlanks6.4w', 'FillintheBlanks6.5w', 'FillintheBlanks6.6w','FillintheBlanks1.0w', 'FillintheBlanks1.1e1', 'FillintheBlanks1.2e1', 'FillintheBlanks1.3e1', 'FillintheBlanks1.e41', 'FillintheBlanks1.51e', 'FillintheBlanks1.61e', 'FillintheBlanks2.0e1', 'FillintheBlanks2.1e1', 'FillintheBlanks2.2e1', 'FillintheBlanks2.3e1', 'FillintheBlanks2.4e1', 'FillintheBlanks2.5e1', 'FillintheBlanks2.6e1', 'FillintheBlanks3.0e1', 'FillintheBlanks3.1e1', 'FillintheBlanks3.2e1', 'FillintheBlanks3.31r', 'FillintheBlanks3.41r', 'FillintheBlanks3.5r1', 'FillintheBlanks3.r61', 'FillintheBlanks4r.11', 'FillintheBlanks4.1t2', 'FillintheBlanks4.2t1', 'FillintheBlanks4.t31', 'FillintheBlanks4.t41', 'FillintheBlanks4.5t1', 'FillintheBlanks4.t61', 'FillintheBlanks5.0t1', 'FillintheBlanks5.1t1', 'FillintheBlanks5.2t1', 'FillintheBlanks5.3t1', 'FillintheBlanks5.4t1', 'FillintheBlanks5.51t', 'FillintheBlanks5.6u1', 'FillintheBlanks6.u01', 'FillintheBlanks6.11u', 'FillintheBlanks6.2u1', 'FillintheBlanks6.31u', 'FillintheBlanks6.u41', 'FillintheBlanks6.5u1', 'FillintheBlanks6.u61','FillintheBlanks1.21u2', 'FillintheBlanks1.12', 'FillintheBlanks1.22', 'FillintheBlanks1.32i', 'FillintheBlanks1.i42', 'FillintheBlanks1.5i2', 'FillintheBlanks1.6i2', 'FillintheBlanks2.0o2', 'FillintheBlanks2.12o', 'FillintheBlanks2.22o', 'FillintheBlanks2.32o', 'FillintheBlanks2.4o2', 'FillintheBlanks2.52o', 'FillintheBlanks2.6o2', 'FillintheBlanks3.l02', 'FillintheBlanks3.1l2', 'FillintheBlanks3.2l2', 'FillintheBlanks3.3l2', 'FillintheBlanks3.4l2', 'FillintheBlanks3.5l2', 'FillintheBlanks3.6x2', 'FillintheBlanks4.12x', 'FillintheBlanks4.12x3', 'FillintheBlanks4.22c', 'FillintheBlanks4.32c', 'FillintheBlanks4.42c', 'FillintheBlanks4.52c', 'FillintheBlanks4.6c2', 'FillintheBlanks5.0c2', 'FillintheBlanks5.c12', 'FillintheBlanks5.22b', 'FillintheBlanks5.3b2', 'FillintheBlanks5.4n2', 'FillintheBlanks5.52', 'FillintheBlanks5.62', 'FillintheBlanks6.02', 'FillintheBlanks6.12', 'FillintheBlanks6.22', 'FillintheBlanks6.32', 'FillintheBlanks6.42', 'FillintheBlanks6.52', 'FillintheBlanks6.62'];
      var rand = myArray[Math.floor(Math.random() * myArray.length)];
      return rand;
   }
   overallfeedback() {
      var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/TeluguData.json', null)
      if (dataRecs && dataRecs.length > 0) {
          dataRecs.forEach(record => {
              BrowserUtils.waitUntilReady(this.overallFeedbackCheckbox());
              this.overallFeedbackCheckbox().click();
              this.plusbutton().click();
              browser.actions().dragAndDrop(this.slider(), { x: 150, y: 0 }).perform();
              this.plusbutton().click();
              browser.actions().dragAndDrop(this.slider(), { x: 200, y: 0 }).perform();
              this.plusbutton().click();
              browser.actions().dragAndDrop(this.slider(), { x: 250, y: 0 }).perform();
              this.plusbutton().click();
              browser.sleep(2000);
              browser.actions().mouseMove(this.saveMCQ()).perform();
              BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[1]"), record["BadScore"]);
              BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[2]"), record["AverageScore"]);
              BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[3]"), record["GoodScore"]);
              BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[4]"), record["VeryGoodScore"]);
          })
      }
  }
  fibcreatepage() {
   var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
   if (dataRecs && dataRecs.length > 0) {
      dataRecs.forEach(record => {
         browser.ignoreSynchronization = true
         BrowserUtils.waitUntilReady(this.createNewTaskBtn());
         browser.sleep(2000);
         this.createNewTaskBtn().click();
         BrowserUtils.waitUntilReady(this.fillintheblanksLink());
         browser.sleep(1000);
         this.fillintheblanksLink().click();
         BrowserUtils.waitUntilReady(this.selectSubject());
         browser.sleep(2000);
         BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["TaskSubject"]);
         browser.sleep(1000);
         BrowserUtils.selectDropdownValue(by.xpath("(//span[@class='input-text-align'])[2]"), record["AcivityType"]);
         browser.sleep(1000);
         this.Activityid().sendKeys(this.ClickonRandomArray());
         browser.sleep(500);
         BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["TeluguTitle"]);
         browser.sleep(1000);
         BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["TeluguInstructions"]);
         browser.sleep(500);
         BrowserUtils.enterText(by.xpath("//input[@minutesseconds]"), record["Time"]);
         browser.sleep(1000);
         var path1 = '../../TestData/AudioFiles/Telugu/fillintheblanks.wav';
         var audioPath = path.resolve(__dirname, path1);
         browser.sleep(500);
         this.typefile1().sendKeys(audioPath);
         browser.sleep(1500);
         this.OKbtn().click();
         browser.sleep(500);
         this.overallfeedback();

      })
   }
}
   fibcreatepagetelugu() {
      var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
      if (dataRecs && dataRecs.length > 0) {
         dataRecs.forEach(record => {
            browser.ignoreSynchronization = true
            BrowserUtils.waitUntilReady(this.createNewTaskBtn());
            browser.sleep(2000);
            this.createNewTaskBtn().click();
            BrowserUtils.waitUntilReady(this.fillintheblanksLink());
            browser.sleep(1000);
            this.fillintheblanksLink().click();
            BrowserUtils.waitUntilReady(this.selectSubject());
            browser.sleep(2000);
            BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["TaskSubject"]);
            browser.sleep(1000);
            BrowserUtils.selectDropdownValue(by.xpath("(//span[@class='input-text-align'])[2]"), record["AcivityType"]);
            browser.sleep(1000);
            this.Activityid().sendKeys(this.ClickonRandomArray());
            browser.sleep(500);
            BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["TeluguTitle"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["TeluguInstructions"]);
            browser.sleep(500);
            BrowserUtils.enterText(by.xpath("//input[@minutesseconds]"), record["Time"]);
            browser.sleep(1000);
            var path1 = '../../TestData/AudioFiles/Telugu/fillintheblanks.wav';
            var audioPath = path.resolve(__dirname, path1);
            browser.sleep(500);
            this.typefile1().sendKeys(audioPath);
            browser.sleep(1500);
            this.OKbtn().click();
            browser.sleep(500);
            this.overallfeedback();

         })
      }
   }
   fibcreatepageenglish() {
      var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
      if (dataRecs && dataRecs.length > 0) {
         dataRecs.forEach(record => {
            browser.ignoreSynchronization = true
            BrowserUtils.waitUntilReady(this.createNewTaskBtn());
            browser.sleep(2000);
            this.createNewTaskBtn().click();
            BrowserUtils.waitUntilReady(this.fillintheblanksLink());
            browser.sleep(1000);
            this.fillintheblanksLink().click();
            BrowserUtils.waitUntilReady(this.selectSubject());
            browser.sleep(2000);
            BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["EnglishTaskSubject"]);
            browser.sleep(1000);
            BrowserUtils.selectDropdownValue(by.xpath("(//span[@class='input-text-align'])[2]"), record["AcivityType"]);
            browser.sleep(1000);
            this.Activityid().sendKeys(this.ClickonRandomArray());
            browser.sleep(500);
            BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["EnglishTitle"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["EnglishInstructions"]);
            browser.sleep(500);
            BrowserUtils.enterText(by.xpath("//input[@minutesseconds]"), record["Time"]);
            browser.sleep(1000);
            var path1 = '../../TestData/AudioFiles/Telugu/fillintheblanks.wav';
            var audioPath = path.resolve(__dirname, path1);
            browser.sleep(500);
            this.typefile1().sendKeys(audioPath);
            browser.sleep(1500);
            this.OKbtn().click();
            browser.sleep(500);
            this.overallfeedback();

         })
      }
   }

   Previewforfillintheblanks() {
      var dataRecs = dataProvider.getJsonDataFromFile('./TestData/fillintheblanksData/EnglishData.json', null)
      if (dataRecs && dataRecs.length > 0) {
         dataRecs.forEach(record => {
      BrowserUtils.scrollIntoView(by.xpath("//div[text()=' PREVIEW ']"));
      browser.sleep(2000);
      // var Applesource = element(by.xpath("//div[@class='choice-cls']/button/div[@class='mat-button-focus-overlay']/../span[text()='" + record["Apple"] + "']"));
      var loc1 = element(by.xpath("//span[text()='two']/.."));
      //var loc2 = element(by.xpath("(//li[@class='blanks-container ng-star-inserted']//span[@class='dynamic-render']//input)[1]"));
      var loc2 = element(by.xpath("(//span[@class='dynamic-render'])[1]"));
      browser.actions().mouseDown(loc1).perform();
      browser.sleep(500);
        browser.actions().mouseMove(loc2).perform();
        browser.sleep(500);
        browser.actions().mouseDown(loc1).perform();
        browser.sleep(500);
        browser.actions().mouseMove(loc2).perform();
        browser.actions().mouseUp().perform();
      browser.sleep(2000000000);
      this.Checkbtn().click();
      browser.sleep(2000);
      this.ShowSolutionbtn().click();
         })
      }
   }
   Deleteoptions() {
      BrowserUtils.scrollIntoView(by.xpath("(//span[@mattooltip='Remove Question'])[8]"));
      this.Deleteoption8().click();
      browser.sleep(1000);
      BrowserUtils.scrollIntoView(by.xpath("(//span[@mattooltip='Remove Slide'])[2]"));
      this.Deleteslide().click();
      browser.sleep(1000);
   }
   DeleteSlideandOptions() {
      this.fibcreatepage();
      this.Telugutaskwithmultiplequestions();
      this.Telugutaskwithmultipleslides();
      this.Deleteoptions();
      BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
      browser.sleep(1000);
      this.saveMCQ().click();
      browser.sleep(1000);
      this.okbutton().click();
      browser.sleep(1000);
      this.clickOntappingMCQNextBtn().click();
      browser.sleep(1000);
      this.Publishnavigation();
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
         expect(dis).toBe(true, 'FillintheblanksTask delete options and slides is successful')
      })
   }
   Multipleslides() {
      this.fibcreatepage();
      this.Telugutaskwithmultiplequestions();
      this.Telugutaskwithmultipleslides();
      BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
      browser.sleep(1000);
      this.saveMCQ().click();
      browser.sleep(1000);
      this.okbutton().click();
      browser.sleep(1000);
      this.clickOntappingMCQNextBtn().click();
      browser.sleep(1000);
      this.Publishnavigation();
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
         expect(dis).toBe(true, 'FillintheblanksTask with multiple slides is created successfully')
      })
   }

   Updatefillintheblanks(){
            browser.ignoreSynchronization = true
            BrowserUtils.waitUntilReady(this.createNewTaskBtn());
            browser.sleep(1000);
            this.EnglishSubject().click();
            browser.sleep(2000);
            this.Tasklink().click();
            browser.sleep(2000);
            BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
            this.clickOntappingMCQNextBtn().click();
            browser.sleep(2000);
            this.okbutton().click();
            browser.sleep(1000);
            this.Previewforfillintheblanks();
            browser.sleep(500);
            this.Publishnavigation();
            this.createNewTaskBtn().isDisplayed().then(function (dis) {
               expect(dis).toBe(true, 'FillintheblanksTask is updated successfully')
            })
   }
   SearchTaskfromlist() {
      var clearsearch = element(by.xpath("//input[@class='search-input']"));
      clearsearch.sendKeys("trueorflase");
      BrowserUtils.waitUntilReady(this.Norecored());
      clearsearch.clear();
      browser.sleep(500);
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
          expect(dis).toBe(true, 'Task list search is working')
      })
  }
  CancelTask() {
      this.fibcreatepage();
      this.Taskcancelbtn().click();
      browser.sleep(2000);
      this.Class1().click();
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
          expect(dis).toBe(true, 'Task popup is closed successfully')
      })
  }
  Contenttypesearch() {
   var contentsearch = element(by.xpath("//input[@type='search']"));
   this.createNewTaskBtn().click();
   browser.sleep(1000);
   contentsearch.sendKeys("Fill in the blanks");
   contentsearch.clear();
   browser.sleep(500);
   this.Class1().click();
}
Previewcancelicon() {
   this.fibcreatepage();
   this.Telugutaskwithmultiplequestions();
   BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
   browser.sleep(500);
   this.saveMCQ().click();
   browser.sleep(1500);
   this.okbutton().click();
   browser.sleep(2500);
   this.clickOntappingMCQNextBtn().click();
   browser.sleep(1500);
   this.Fillintheblanksbreadcrumb().click();
   browser.sleep(1500);
   this.Class1().click();
   this.createNewTaskBtn().isDisplayed().then(function (dis) {
       expect(dis).toBe(true, 'Preview cancelicon is working successfully')
   })
}
Previewbackbutton() {
   this.fibcreatepage();
   this.Telugutaskwithmultiplequestions();
   BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
   browser.sleep(1500);
   this.saveMCQ().click();
   browser.sleep(2500);
   this.okbutton().click();
   browser.sleep(1500);
   this.clickOntappingMCQNextBtn().click();
   browser.sleep(500);
   this.Backbtn().click();
   browser.sleep(500);
   this.Taskcancelbtn().click();
   browser.sleep(500);
   this.Class1().click();
   this.createNewTaskBtn().isDisplayed().then(function (dis) {
       expect(dis).toBe(true, 'Preview cancelicon is working successfully')
   })
}
Publishcancelicon() {
   this.fibcreatepage();
   this.Telugutaskwithmultiplequestions();
   BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
   browser.sleep(1500);
   this.saveMCQ().click();
   browser.sleep(2500);
   this.okbutton().click();
   browser.sleep(1500);
   this.clickOntappingMCQNextBtn().click();
   browser.sleep(500);
   this.clickOntappingMCQNextBtn().click();
   browser.sleep(500);
   this.Previewbreadcrumb().click();
   browser.sleep(1500);
   this.Taskcancelbtn().click();
   browser.sleep(500);
   this.Class1().click();
   this.createNewTaskBtn().isDisplayed().then(function (dis) {
       expect(dis).toBe(true, 'Publish breadcrumb is working successfully')
   })
}
Publishbackbutton() {
   this.fibcreatepage();
   this.Telugutaskwithmultiplequestions();
   BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
   browser.sleep(1500);
   this.saveMCQ().click();
   browser.sleep(2500);
   this.okbutton().click();
   browser.sleep(1500);
   this.clickOntappingMCQNextBtn().click();
   browser.sleep(500);
   this.clickOntappingMCQNextBtn().click();
   BrowserUtils.waitUntilReady(this.publishBtn());
   browser.sleep(500);
   this.Backbtn().click();
   browser.sleep(500);
   this.Backbtn().click();
   browser.sleep(500);
   this.Taskcancelbtn().click();
   browser.sleep(500);
   this.Class1().click();
   this.createNewTaskBtn().isDisplayed().then(function (dis) {
       expect(dis).toBe(true, 'Publish backbutton is working successfully')
   })
}
Fibtaskwithtelugudata() {
      this.fibcreatepagetelugu();
      this.Telugutaskwithmultiplequestions();
      BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
      browser.sleep(1000);
      this.saveMCQ().click();
      browser.sleep(1500);
      this.okbutton().click();
      browser.sleep(1000);
      this.clickOntappingMCQNextBtn().click();
      //browser.sleep(1000);
      //this.Previewforfillintheblanks();
      browser.sleep(1500);
      this.Publishnavigation();
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
         expect(dis).toBe(true, 'FillintheblanksTask is created successfully with telugu data')
      })
   }
   Fibtaskwithenglishdata(){
      this.fibcreatepageenglish();
      this.Englishtaskwithmultipleslides();
      BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
      browser.sleep(1000);
      this.saveMCQ().click();
      browser.sleep(1500);
      this.okbutton().click();
      browser.sleep(1000);
      this.clickOntappingMCQNextBtn().click();
      //browser.sleep(1000);
      //this.Previewforfillintheblanks();
      browser.sleep(1500);
      this.Publishnavigation();
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
         expect(dis).toBe(true, 'FillintheblanksTask is created successfully with english data')
      })
   }
   Publishnavigation() {
            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Next')]"));
            browser.sleep(1000);
            this.clickOntappingMCQNextBtn().click();
            browser.sleep(1000);
            BrowserUtils.waitUntilReady(this.publishBtn());
            this.publishBtn().click();
            browser.sleep(1000);
            this.succesfulCreationOfTasks().click();
            browser.sleep(1000);
            this.createNewTaskBtn().isDisplayed().then(function (dis) {
               expect(dis).toBe(true, 'Task is created successfully')
            })
   }
   Englishtaskwithmultipleslides() {
      var dataRecs = dataProvider.getJsonDataFromFile('./TestData/fillintheblanksData/EnglishData.json', null)
      if (dataRecs && dataRecs.length > 0) {
         dataRecs.forEach(record => {
      browser.ignoreSynchronization = true
      browser.sleep(1000);
      this.addSlide().click();
      browser.sleep(500);
      this.AddQuestionbtn2().click();
      browser.sleep(500);
      this.AddQuestionbtn2().click();
      BrowserUtils.enterText(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[5]"), record["English1"]);
      browser.sleep(2000);
      this.textbox5().click();
      browser.sleep(1000);
      this.Insertimage2().click();
      browser.sleep(1000);
      BrowserUtils.enterText(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[6]"), record["English2"]);
      browser.sleep(2000);
      this.textbox6().click();
      browser.sleep(1000);
      this.Insertimage2().click();
      browser.sleep(1000);
      BrowserUtils.enterText(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[7]"), record["English3"]);
      browser.sleep(2000);
      this.textbox7().click();
      browser.sleep(1000);
      this.Insertimage2().click();
      browser.sleep(1000);
      BrowserUtils.enterText(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[8]"), record["English4"]);
      browser.sleep(2000);
      this.textbox8().click();
      browser.sleep(1000);
      this.Insertimage2().click();
      browser.sleep(1000);
      var train = "../../TestData/ImageFiles/Train.jpeg";
      var trainPath = path.resolve(__dirname, train);
      this.typefile5().sendKeys(trainPath);
      browser.sleep(500);
      var fish = '../../TestData/ImageFiles/fish.png';
      var fishPath = path.resolve(__dirname, fish);
      this.typefile6().sendKeys(fishPath);
      browser.sleep(500);
      var beehive = "../../TestData/ImageFiles/beehive.png";
      var beehivePath = path.resolve(__dirname, beehive);
      this.typefile7().sendKeys(beehivePath);
      browser.sleep(500);
      var tunnel = "../../TestData/ImageFiles/tunnel.png";
      var tunnelPath = path.resolve(__dirname, tunnel);
      this.typefile8().sendKeys(tunnelPath);
      browser.sleep(500);
         })
      }
   }
   Telugutaskwithmultipleslides() {
      var dataRecs = dataProvider.getJsonDataFromFile('./TestData/fillintheblanksData/TeluguData.json', null)
      if (dataRecs && dataRecs.length > 0) {
         dataRecs.forEach(record => {
      browser.ignoreSynchronization = true
      browser.sleep(1000);
      this.addSlide().click();
      browser.sleep(500);
      this.AddQuestionbtn2().click();
      browser.sleep(500);
      this.AddQuestionbtn2().click();
      BrowserUtils.enterText(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[5]"), record["Telugu1"]);
      browser.sleep(2000);
      this.textbox5().click();
      //browser.sleep(1000);
      //this.Insertimage2().click();
      browser.sleep(1000);
      BrowserUtils.enterText(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[6]"), record["Telugu2"]);
      browser.sleep(2000);
      this.textbox6().click();
      browser.sleep(1000);
      //this.Insertimage2().click();
      browser.sleep(1000);
      BrowserUtils.enterText(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[7]"), record["Telugu3"]);
      browser.sleep(2000);
      this.textbox7().click();
      browser.sleep(1000);
      //this.Insertimage2().click();
      browser.sleep(1000);
      BrowserUtils.enterText(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[8]"), record["Telugu4"]);
      browser.sleep(2000);
      this.textbox8().click();
      browser.sleep(1000);
      //this.Insertimage2().click();
      browser.sleep(1000);
      // var train = "../../TestData/ImageFiles/Train.jpeg";
      // var trainPath = path.resolve(__dirname, train);
      // this.typefile5().sendKeys(trainPath);
      // browser.sleep(500);
      // var fish = '../../TestData/ImageFiles/fish.png';
      // var fishPath = path.resolve(__dirname, fish);
      // this.typefile6().sendKeys(fishPath);
      // browser.sleep(500);
      // var beehive = "../../TestData/ImageFiles/beehive.png";
      // var beehivePath = path.resolve(__dirname, beehive);
      // this.typefile7().sendKeys(beehivePath);
      // browser.sleep(500);
      // var tunnel = "../../TestData/ImageFiles/tunnel.png";
      // var tunnelPath = path.resolve(__dirname, tunnel);
      // this.typefile8().sendKeys(tunnelPath);
      // browser.sleep(500);
         })
      }
   }

   Telugutaskwithmultiplequestions() {
      var dataRecs = dataProvider.getJsonDataFromFile('./TestData/fillintheblanksData/TeluguData.json', null)
      if (dataRecs && dataRecs.length > 0) {
         dataRecs.forEach(record => {
            browser.ignoreSynchronization = true
            BrowserUtils.scrollIntoView(by.xpath("//span[text()='Insert Image +']"));
            browser.sleep(2000);
            this.AddQuestionbtn().click();
            browser.sleep(500);
            this.AddQuestionbtn().click();
            BrowserUtils.enterText(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[1]"), record["Telugu6"]);
            browser.sleep(1000);
            this.textbox1().click();
            browser.sleep(1000);
            this.Insertimage().click();
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[1]"), record["Telugu7"]);
            browser.sleep(1000);
            this.textbox2().click();
            browser.sleep(1000);
            this.Insertimage().click();
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[1]"), record["Telugu8"]);
            browser.sleep(1000);
            this.textbox3().click();
            browser.sleep(1000);
            this.Insertimage().click();
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("(//div[@class='text-container ng-star-inserted']/input)[1]"), record["Telugu9"]);
            browser.sleep(1000);
            this.textbox4().click();
            browser.sleep(1000);
            this.Insertimage().click();
            browser.sleep(1000);
            var panduraju = "../../TestData/ImageFiles/panduraju.jpeg";
            var pandurajuPath = path.resolve(__dirname, panduraju);
            this.typefile2().sendKeys(pandurajuPath);
            browser.sleep(1500);
            var bheema= "../../TestData/ImageFiles/bheema.jpeg";
            var bheemaPath = path.resolve(__dirname, bheema);
            this.typefile2().sendKeys(bheemaPath);
            browser.sleep(1500);
            var bheema= "../../TestData/ImageFiles/bheema.jpeg";
            var bheemaPath = path.resolve(__dirname, bheema);
            this.typefile2().sendKeys(bheemaPath);
            browser.sleep(1500);
            var pandavulu = "../../TestData/ImageFiles/pandavulu.jpeg";
            var pandavuluPath = path.resolve(__dirname, pandavulu);
            this.typefile2().sendKeys(pandavuluPath);
            browser.sleep(500);
         })
      }
   }
}

