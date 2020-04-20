import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
export class courseapprovalPage {

     CourselistPanelElement() {
          return element(by.xpath("//mat-expansion-panel-header[@aria-expanded='false']//mat-panel-title[@ng-reflect-router-link='/classes/all-courses']"));
     }

     ClickAllclasses() {
          return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/classes/all-courses']"))
     }
     keycloakloginbtn() {
          return element(by.xpath("//input[@name='login']"));
      }
      commentbutton() {
          return element(by.xpath("//span[contains(text(),'Add Comment')]"))
      }
     Keycloaklogin() {
          var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
          if (dataRecs && dataRecs.length > 0) {
              dataRecs.forEach(record => {
                  BrowserUtils.enterText(by.xpath("//input[@id='username']"), record["ApproverUsername"]);
                  BrowserUtils.enterText(by.xpath("//input[@id='password']"), record["Approverpassword"]);
                  this.keycloakloginbtn().click();
                  browser.sleep(2000);
              })
          }
          
      }

      approvetasks(){
          var dataRecs = dataProvider.getJsonDataFromFile('./TestData/courseapprover/Courseapprover.json', null)
          if (dataRecs && dataRecs.length > 0) {
              dataRecs.forEach(record => {
               browser.ignoreSynchronization = true
               var classselection = by.xpath("//mat-expansion-panel-header[@ng-reflect-router-link='/classes/all-courses']/../div//mat-list/mat-list-item/div[contains(text(),'" + record["Class"] + "')]");
               BrowserUtils.clickOnElement(classselection);
               browser.sleep(1500);
               var subjectselection = by.xpath("//span[text()='" + record["Subject"] + "']");
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1500);
               var Tasklinkselection = by.xpath("//a[contains(text(),'" + record["ApproverTasklink"] + "')]");
               BrowserUtils.clickOnElement(Tasklinkselection);
               browser.sleep(1500);
               BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
               this.commentbutton().click();
               BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
               browser.sleep(1500);
               BrowserUtils.getTotalElementCount(by.xpath("//div[contains(@class,'milestone-wrapper')]")).then((getmilestoneCount) => {
                    console.log("loc is:" + getmilestoneCount);
                    for (let milestoneCount = 1;milestoneCount <= getmilestoneCount; milestoneCount++) {
                         var milestoneCountloc = "(//div[contains(@class,'milestone-wrapper')])[" + milestoneCount + "]";
                         console.log(milestoneCountloc);
                         var milestoneContainer = by.xpath(milestoneCountloc);
                         BrowserUtils.clickOnElement(milestoneContainer);
                         browser.sleep(2000);
                         BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
               this.commentbutton().click();
               BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
               browser.sleep(1500);
                    }
              })
              })
          }
               
     }

    }