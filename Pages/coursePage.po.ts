import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
export class coursePage {

     CourselistPanelElement() {
          return element(by.xpath("//mat-expansion-panel-header[@aria-expanded='false']//mat-panel-title[@ng-reflect-router-link='/classes/all-courses']"));
     }

     ClickAllclasses() {
          return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/classes/all-courses']"))
     }
     Createnewcoursebutton() {
          return element(by.xpath("//span[contains(text(),'Create New Course')]"));
     }
     Subjectvalidation() {
          return element(by.xpath("//div[contains(text(),'No subjects available')]"));
     }
     Subjectdropdown() {
          return element(by.xpath("//select[@name='subject']"));
     }
     AddMilestonecontainer() {
          return element(by.xpath("//button[@class='add-container ng-star-inserted']"));
     }
     Exportbutton() {
          return element(by.xpath("//span[text()='Export']"));
     }
     commentbutton() {
          return element(by.xpath("//span[contains(text(),'Add Comment')]"))
      }
      previewcommentbutton() {
          return element(by.xpath("(//span[contains(text(),'Add Comment')])[2]"))
      }
      Commentcancelbtn() {
          return element(by.xpath("//span[contains(text(),'CANCEL')]"));
      }
      Commentsavebtn() {
          return element(by.xpath("//span[contains(text(),'SAVE')]"));
      }
     AddMilestoneicon() {
          return element(by.xpath("//mat-icon[text()='add']"));
     }
     AddMilestoneicon1() {
          return element(by.xpath("(//img[@src='assets/images/add.png'])[1]"));
     }

     AddnewActivity() {
          return element(by.xpath("//span[text()=' ADD NEW ACTIVITY ']"));
     }
     TabActivity() {
          return element(by.xpath("//span[text()='Tab Activity ']"));
     }
     PeacockActivity() {
          return element(by.xpath("//span[text()='Peacock ']"));
     }
     PenguinActivity() {
          return element(by.xpath("//span[text()='Penguin ']"));
     }
     ParrotActivity() {
          return element(by.xpath("//span[text()='Parrot ']"));
     }
     RoosterActivity() {
          return element(by.xpath("//span[text()='Rooster  ']"));
     }
     ReadingActivity() {
          return element(by.xpath("//span[text()='Reading ']"));
     }
     TaskNumberfield() {
          return element(by.xpath("//p[contains(text(),'You are adding a Tab Task')]"));
     }
     TabTask() {
          return element(by.xpath("//p[contains(text(),'You are adding a Tab Task')]"));
     }
     Taskselection() {
          return element(by.xpath("//input[@name='selectTask']"));
     }
     Itemsperpage() {
          return element(by.xpath("//div[@class='mat-paginator-page-size-label']"));
     }
     radio() {
          return element(by.xpath("//label[@class='radio']"));
     }
     Taskcheckround() {
          return element(by.xpath("(//span[@class='checkround'])[1]"));
     }
     Taskcheckrandomround() {
          return element(by.xpath("//span[@class='checkround']"));
     }
     AddTask() {
          return element(by.xpath("//span[text()='ADD']"));
     }
     Tasktypedropdown() {
          return element(by.xpath("//span[text()='ADD']"));
     }
     Taskswrapper() {
          return element(by.xpath("//div[@ng-reflect-klass='tab-wrapper']"));
     }
     SaveCourse() {
          return element(by.xpath("//span[text()='Save']"));
     }
     SubmitforApproval() {
          return element(by.xpath("//span[contains(text(),'Submit For Approval')]"));
     }
     SaveMilestone() {
          return element(by.xpath("//span[text()='Save']"));
     }
     DeleteCourse() {
          return element(by.xpath("//div[@class='buttons-container']//span[text()='Delete']"));
     }
     PreviewCourse() {
          return element(by.xpath("//span[contains(text(),'Activity Preview')]"));
     }
     Homebtn() {
          return element(by.xpath("//span[text()='Home']"));
     }
     MilestonePreviewbtn() {
          return element(by.xpath("//button[text()='PREVIEW ']"));
     }
     Backbtn() {
          return element(by.xpath("//span[@class='back-title']"));
     }
     Previewclose() {
          return element(by.xpath("//mat-icon[text()='clear']"));
     }
     MilestoneUpdateicon() {
          return element(by.xpath("(//i[text()='edit'])[1]"));
     }
     Clonemilestone() {
          return element(by.xpath("(//i[text()='file_copy'])[1]"));
     }
     MilestoneDeleteicon() {
          return element(by.xpath("(//i[text()='delete'])[1]"));
     }
     MilestoneOKbtn() {
          return element(by.xpath("//button[text()='OK']"));
     }
     CorseOKbtn() {
          return element(by.xpath("//span[text()='OK']"));
     }
     Subjectok() {
          return element(by.xpath("//button[text()='OK']"));
     }
     MilestoneCancelDelete() {
          return element(by.xpath("//button[@class='foot-cancel-btn']"));
     }
     Publishmilestone() {
          return element(by.xpath("//span[text()='Publish']"));
     }
     Publishtask() {
          return element(by.xpath("//div[text()='Publish']"));
     }
     Class1() {
          return element(by.xpath("//mat-panel-title[@ng-reflect-router-link='/classes/all-courses']/../../following-sibling::div/div/mat-list/mat-list-item/div[text()='Class 1 ']"));
     }
     Maths() {
          return element(by.xpath("//div[@class='mat-tab-label-content'][text()='MATHS']"));
     }
     Activityname() {
          return element(by.xpath("//input[contains(@class,'activityname-cls')]"));
     }
     Searchcourse() {
          return element(by.xpath("//input[@class='head-search']"));
     }
     Yeardropdown() {
          return element(by.xpath("//select[contains(@class,'year-list-dropdown ')]"));
     }
     Previewicon() {
          return element(by.xpath("(//i[text()='remove_red_eye'])[1]"));
     }
     TaskPreviewicon() {
          return element(by.xpath("(//i[@class='fa fa-eye'])[1]"));
     }
     TaskEditicon() {
          return element(by.xpath("(//i[@class='fa fa-pencil-square-o'])[1]"));
     }
     TaskCancelicon() {
          return element(by.xpath("//div[text()='x']"));
     }
     Previewcancelicon() {
          return element(by.xpath("//div[text()='X']"));
     }
     Cancelicon() {
          return element(by.xpath("//span[text()='CANCEL']"));
     }
     Activitydelete() {
          return element(by.xpath("//span[contains(text(),'Delete')]"));
     }
     Taskremovalbtn() {
          return element(by.xpath("(//i[@class='fa fa-remove'])[1]"));
     }
     Courselink() {
          return element(by.xpath("//table[@class='mat-table']//td/a[@class='task-link']"));
     }
     Editicon() {
          return element(by.xpath("(//i[@class='fa fa-edit action-icon-btn'])[1]"));
     }
     Deleteicon() {
          return element(by.xpath("(//i[text()='delete'])[1]"));
     }
     Norecored() {
          return element(by.xpath("//td[text()=' No record found. ']"));
     }
     CourselinkPath() {
          return by.xpath("//a[@class='task-link']");
     }
     Tasksadded() {
          return element(by.xpath("//div[@ng-reflect-klass='tab-wrapper']"));
     }
     Coursepreviewicon() {
          return element(by.xpath("//i[@class='fa fa-eye action-icon-btn']"));
     }
     Previewpagecontainer() {
          return element(by.xpath("//div[@class='course-container']"));
     }
     saveMCQ() {
          return element(by.xpath('//div[text()="Save"]'))
     }
     acceptSaveTaskPopUp() {
          return element(by.xpath('//button[text()="OK"]'))
     }
     taskcloneicon() {
          return element(by.xpath("//i[@class='fa fa-clone']"));
     }
     taskdeleteicon() {
          return element(by.xpath("//i[@class='fa fa-trash']"));
     }
     taskminimizeicon() {
          return element(by.xpath("//i[@class='fa fa-minus']"));
     }
     clickOnClassLinks() {
          return by.xpath("//mat-panel-title[text()=' All Courses ']/../../following-sibling::div//mat-list-item");
     }
     clickOnSubjectsLinks() {
          return by.xpath("//div[@class='mat-tab-label-content']");
     }
     Previewtext() {
          return element(by.xpath("//div[text()=' Preview ']"));
     }
     Browsebtn() {
          return element(by.xpath("//input[@name='selectDocument']"));
     }
     clickOntappingMCQNextBtn() {
          return element(by.xpath("//div[@class='action-btn'][text()='Next']"))
     }
     Newtaskbtn() {
          return element(by.xpath("//span[text()='New Task ']"));
     }
     Activityid() {
          return element(by.xpath("//input[@id='activityid']"))
     }
     Tasktime() {
          return element(by.xpath("//input[@placeholder='mm:ss']"));
     }
     Allcourseslink() {
          return element(by.xpath("//mat-panel-title[@ng-reflect-router-link='/classes/all-courses']"));
     }
     MilestonePreview() {
          browser.ignoreSynchronization = true
          browser.sleep(2500);
          this.Courselink().isDisplayed().then(function (dis) {
               expect(dis).toBe(true, 'Milestone created is previewed');
               this.Courselink().click();
               this.MilestonePreviewbtn().click();
               this.Backbtn().click();
          });
     }
     ExportCourse() {
          this.Exportbutton().click();
          browser.sleep(2000);
          this.acceptSaveTaskPopUp().click();
          this.Createnewcoursebutton().isDisplayed().then(function (dis) {
               expect(dis).toBe(true, 'Course can be exported successfully')
          })
     }
     Milestonecoursepreview() {
          BrowserUtils.waitUntilReady(this.PreviewCourse());
          browser.sleep(500);
          this.PreviewCourse().click();
          BrowserUtils.waitUntilReady(this.Previewclose());
          browser.sleep(500);
          this.Previewclose().click();
     }
     clickallsubjects() {
          BrowserUtils.countAndClick(this.clickOnSubjectsLinks());
          this.Maths().click();
          this.Createnewcoursebutton().isDisplayed().then(function (dis) {
               expect(dis).toBe(true, 'Course subject links are clickable')
          })
     }
     Coursedata() {
          browser.ignoreSynchronization = true
          var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
          if (dataRecs && dataRecs.length > 0) {
               dataRecs.forEach(record => {
                   
                    browser.sleep(1000);
                    BrowserUtils.enterText(by.xpath("//input[@name='title']"), record["Retakes"]);
                    browser.sleep(1000);
                    BrowserUtils.selectDropdownValue(by.xpath("//select[@name='year']"), record["Academicyear"]);
                    BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                    this.commentbutton().click();
                    BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                    browser.sleep(500);
                    this.Commentsavebtn().click();
                    browser.sleep(1500);
                    this.AddMilestonecontainer().click();
                    BrowserUtils.waitUntilReady(this.AddMilestoneicon());
                    this.AddMilestoneicon().click();
                    BrowserUtils.waitUntilReady(this.SaveCourse());
                    BrowserUtils.enterText(by.xpath("//input[@formcontrolname='daysToComplete']"), record["Completiondays"]);                  
                    for (let i = 1; i <= 2; i++) {
                    this.AddnewActivity().click();
                    browser.sleep(500);
                    var Activityselection = by.xpath("//span[contains(text(),'" + record["ActivityName"] + "')]");
                    browser.sleep(2000);
                    BrowserUtils.clickOnElement(Activityselection);
                    browser.sleep(500);
                    BrowserUtils.enterText(by.xpath("//input[@dicimalnumber][@placeholder='enter no. here']"), record["ActivityNo"]);
                    browser.sleep(200);
                   this.TabTask().click();
                     browser.sleep(200);
                     this.Taskselection().click()
                  BrowserUtils.waitUntilReady(this.TaskNumberfield());
                    this.TaskNumberfield().sendKeys(this.ClickonRandomArray());
                    this.Taskselection().click();
                    browser.sleep(200);
                    BrowserUtils.getTotalElementCount(by.xpath("//tr[@class='header-items mat-row ng-star-inserted']")).then((gettaskCount) => {
                         console.log("loc is:" + gettaskCount);
                         if (gettaskCount) {
                              browser.ignoreSynchronization = true
                              browser.sleep(2000);
                              console.log("There are Tasks assigned on this task type");
                              this.Taskcheckround().click();
                              this.AddTask().click();
                              BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
                              browser.sleep(500);
                              this.SaveCourse().click();
                              browser.sleep(500);
                              BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
                              this.MilestoneOKbtn().click();
                              browser.sleep(500);
                              BrowserUtils.scrollIntoView(by.xpath("(//span[contains(text(),'Add Comment')])[2]"));
                              this.previewcommentbutton().click();
                              BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                              browser.sleep(500);
                              this.Commentsavebtn().click();
                              browser.sleep(1500);
                              this.Milestonecoursepreview();
                              browser.sleep(500);
                              BrowserUtils.waitUntilReady(this.SaveCourse());
                              this.Homebtn().click();
                              browser.sleep(500);
                              this.SubmitforApproval().isDisplayed().then(function (dis) {
                                   expect(dis).toBe(true, 'Course is created successfully')
                              })
                         }
                         else {
                              browser.ignoreSynchronization = true
                              console.log("There are no Tasks assigned on this task type");
                              BrowserUtils.waitUntilReady(this.Cancelicon());
                              browser.sleep(2000);
                              this.Cancelicon().click();
                              browser.sleep(1500);
                              BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Delete')]"));
                              this.Activitydelete().click();
                              browser.sleep(500);
                              this.CorseOKbtn().click();
                              browser.sleep(500);
                              this.Class1().click();
                              browser.sleep(1500);
                              this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                                   expect(dis).toBe(true, 'Course cannot be created due to inavilability of tasks')
                              })
                         }
                    })
                    ////
                    }
               })
          }
     }
     createNewCourse() {
          browser.ignoreSynchronization = true
          var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
          if (dataRecs && dataRecs.length > 0) {
               dataRecs.forEach(record => {
                    BrowserUtils.waitUntilReady(this.Createnewcoursebutton());
                    this.Createnewcoursebutton().click();
                    browser.sleep(2000);
                    BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subject']"), record["Subject"]);
                    browser.sleep(1000);
                    if (this.Subjectvalidation) {
                         browser.sleep(2000);
                         this.MilestoneOKbtn().click();
                         browser.sleep(1000);
                         this.Class1().click();
                         browser.sleep(1000);
                         console.log("There are no subjects available to create course")
                    }
                    else {
                         this.Coursedata();
                    }

               })
          }
     }
     clickAllclasses() {
          console.log("Click on all classes");
          var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
          if (dataRecs && dataRecs.length > 0) {
               dataRecs.forEach(record => {
                    BrowserUtils.waitUntilReady(this.Class1());
                    browser.sleep(4000);
                    //BrowserUtils.countAndClick(this.clickOnClassLinks());
                    var editiconselection = by.xpath("//mat-expansion-panel-header[@ng-reflect-router-link='/classes/all-courses']/../div//mat-list/mat-list-item/div[contains(text(),'" + record["Courseclass"] + "')]");
                    browser.sleep(2000);
                    BrowserUtils.clickOnElement(editiconselection);
                    this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                         expect(dis).toBe(true, 'AllCourses class links are clickable')
                    })
               })
          }
     }
     Createcourse() {
          this.createNewCourse();
     }
     Milestoneendflow() {
          this.Milestonecoursepreview();
          this.SaveCourse().click();
          browser.sleep(1000);
          BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
          this.MilestoneOKbtn().click();
          browser.sleep(1000);
          this.Milestonecoursepreview();
          browser.sleep(1000);
          BrowserUtils.waitUntilReady(this.Homebtn());
          this.Homebtn().click();
          browser.sleep(1000);
     }
     Milestoneupdate() {
          browser.ignoreSynchronization = true
          this.Courselink().click();
          this.MilestoneUpdateicon().click();
          BrowserUtils.waitUntilReady(this.AddnewActivity());
          this.Taskselection().click();
          BrowserUtils.waitUntilReady(this.Itemsperpage());
          this.Taskcheckround().click();
          this.AddTask().click();
          this.SaveCourse().click();
          browser.sleep(2000);
          BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
          this.MilestoneOKbtn().click();
          browser.sleep(2000);
          BrowserUtils.waitUntilReady(this.Homebtn());
          this.Homebtn().click();
          this.Publishmilestone().isDisplayed().then(function (dis) {
               expect(dis).toBe(true, 'Milestone update  is successfully ')
          })
     }
     CloneMilestone() {
          browser.ignoreSynchronization = true
          this.Clonemilestone().click();
          this.Publishmilestone().isDisplayed().then(function (dis) {
               expect(dis).toBe(true, 'Milestone cloned  is successfully ')
          })
     }
     Milestonedelete() {
          browser.ignoreSynchronization = true
          this.MilestoneDeleteicon().click();
          this.MilestoneOKbtn().click();
          this.Publishmilestone().isDisplayed().then(function (dis) {
               expect(dis).toBe(true, 'Milestone delete  is successfully ')
          })
     }
     PublishMilestone() {
          browser.ignoreSynchronization = true
          BrowserUtils.waitUntilReady(this.Publishmilestone());
          browser.sleep(500);
          this.Publishmilestone().click();
          browser.sleep(500);
          this.MilestoneOKbtn().click();
     }
     SearchCourse() {
          browser.ignoreSynchronization = true
          this.Class1().click();
          var clearsearch = element(by.xpath("//div[@class='head-search-container']/input"));
          clearsearch.sendKeys("Testing");
          BrowserUtils.waitUntilReady(this.Norecored());
          clearsearch.clear();
          BrowserUtils.waitUntilReady(this.Previewicon());
          this.Createnewcoursebutton().isDisplayed().then(function (dis) {
               expect(dis).toBe(true, 'Course search  is successfully ')
          })
     }
     Yearselectiondropdown() {
          browser.ignoreSynchronization = true
          var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
          if (dataRecs && dataRecs.length > 0) {
               dataRecs.forEach(record => {
                    BrowserUtils.selectDropdownValue(by.xpath("//div[text()='Year']/../select[contains(@class,'rv-select')]"), record["Year"]);
                    BrowserUtils.waitUntilReady(this.Previewicon());
               })
               this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Year selection  is successfully ')
               })
          }
     }
     Courselinkupdate() {
          browser.ignoreSynchronization = true
          this.Courselink().click();
          this.AddMilestoneicon1().click();
          this.AddnewActivity().click();
          browser.sleep(1500);
          this.TabActivity().click();
          browser.sleep(1000);
          BrowserUtils.waitUntilReady(this.TaskNumberfield());
          this.TaskNumberfield().sendKeys(this.ClickonRandomArray());
          this.Taskselection().click();
          BrowserUtils.waitUntilReady(this.Itemsperpage());
          var radio = element(by.xpath("//label[@class='radio']"))
          if (radio.length > 0) {
               this.Taskcheckround().click();
               this.AddTask().click();
               BrowserUtils.scrollIntoView(by.xpath("//button[@class='action-btn ng-star-inserted'][text()='Save']"));
               browser.sleep(500);
               this.SaveCourse().click();
               browser.sleep(1000);
               BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
               this.MilestoneOKbtn().click();
               browser.sleep(1000);
               this.Milestonecoursepreview();
               browser.sleep(1000);
               BrowserUtils.waitUntilReady(this.Homebtn());
               this.Homebtn().click();
               browser.sleep(1000);
          }
          else {
               console.log("There are no Tasks assigned on this task type");
               BrowserUtils.waitUntilReady(this.Cancelicon());
               browser.sleep(2000);
               this.Cancelicon().click();
               this.Class1().click();
               this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Course cannot be created due to inavilability of tasks')
               })
          }

     }
     CoursePreviewicon() {
          browser.ignoreSynchronization = true
          browser.sleep(2000);
          this.Previewicon().click();
          browser.sleep(1500);
          this.Backbtn().click();
          this.Createnewcoursebutton().isDisplayed().then(function (dis) {
               expect(dis).toBe(true, 'Course table preview  is created successfully ')
          })
     }
     Courseediticon() {
          browser.ignoreSynchronization = true
          browser.sleep(2000);
          this.Editicon().click();
          this.AddMilestoneicon1().click();
          this.AddnewActivity().click();
          browser.sleep(1500);
          this.TabActivity().click();
          browser.sleep(1000);
          BrowserUtils.waitUntilReady(this.TaskNumberfield());
          this.TaskNumberfield().sendKeys(this.ClickonRandomArray());
          this.Taskselection().click();
          BrowserUtils.waitUntilReady(this.Itemsperpage());
          var radio = element(by.xpath("//label[@class='radio']"))
          if (radio.length > 0) {
               this.Taskcheckround().click();
               this.AddTask().click();
               BrowserUtils.scrollIntoView(by.xpath("//button[@class='action-btn ng-star-inserted'][text()='Save']"));
               browser.sleep(500);
               this.SaveCourse().click();
               browser.sleep(1000);
               BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
               this.MilestoneOKbtn().click();
               browser.sleep(1000);
               this.Milestonecoursepreview();
               browser.sleep(1000);
               BrowserUtils.waitUntilReady(this.Homebtn());
               this.Homebtn().click();
               browser.sleep(1000);
          }
          else {
               console.log("There are no Tasks assigned on this task type");
               BrowserUtils.waitUntilReady(this.Cancelicon());
               browser.sleep(2000);
               this.Cancelicon().click();
               this.Class1().click();
               this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Course cannot be created due to inavilability of tasks')
               })
          }


     }
     CourseDeleteicon() {
          browser.ignoreSynchronization = true
          browser.sleep(2000);
          BrowserUtils.getTotalElementCount(by.xpath("//i[text()='delete']")).then((getediticonCount) => {
               console.log("loc is:" + getediticonCount);
               if (getediticonCount) {
                    for (let editiconCount = 1; editiconCount <= getediticonCount; editiconCount++) {
                         var loc = "(//i[text()='delete'])[" + editiconCount + "]";
                         console.log(loc);
                         var editiconselection = by.xpath(loc);
                         BrowserUtils.clickOnElement(editiconselection);
                         browser.sleep(2000);
                         this.CorseOKbtn().click();
                         browser.sleep(2000);
                         this.MilestoneOKbtn().click();
                         browser.sleep(1000);
                    }
               }
               else {
                    console.log("There are no courses to delete");
               }



          })

          this.Createnewcoursebutton().isDisplayed().then(function (dis) {
               expect(dis).toBe(true, 'Course delete  is working successfully ')
          })
     }
     CoursewithMultipleActivity() {
          var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/Maths.json', null)
          if (dataRecs && dataRecs.length > 0) {
               dataRecs.forEach(record => {
                    browser.sleep(1000);
                    BrowserUtils.selectDropdownValue(by.xpath("//select[@name='year']"), record["Academicyear"]);
                    this.AddMilestonecontainer().click();
                    BrowserUtils.waitUntilReady(this.AddMilestoneicon());
                    this.AddMilestoneicon().click();
                    BrowserUtils.waitUntilReady(this.AddnewActivity());
                    BrowserUtils.enterText(by.xpath("//input[@formcontrolname='daysToComplete']"), record["Completiondays"]);
                    var Activity = element(by.xpath("//span[text()='" + record.Activitytype + " ']"));
                    Activity.click();
                    browser.sleep(1000);
                    this.TaskNumberfield().sendKeys(this.ClickonRandomArray());
                    BrowserUtils.selectDropdownValue(by.xpath("//select[@name='taskType']"), record["OfflineTaskType"]);


                    //this.AddnewActivity().click();
                    BrowserUtils.enterText(by.xpath("//input[contains(@class,'activityname-cls')]"), record["ActivityName"]);
                    BrowserUtils.selectDropdownValue(by.xpath("//select[@name='taskType']"), record["TaskTypeIntroduction"]);
                    browser.sleep(2000);
                    BrowserUtils.waitUntilReady(this.TaskNumberfield());
                    this.TaskNumberfield().sendKeys(this.ClickonRandomArray());
                    this.Taskselection().click();
                    BrowserUtils.waitUntilReady(this.Itemsperpage());
                    var radio = element.all(by.xpath("//tr[@class='header-items mat-row ng-star-inserted']"))
                    if (radio.isEnabled) {
                         this.Taskcheckround().click();
                         this.AddTask().click();
                         BrowserUtils.scrollIntoView(by.xpath("//button[@class='action-btn ng-star-inserted'][text()='Save']"));
                         browser.sleep(500);
                         this.SaveCourse().click();
                         browser.sleep(500);
                         BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
                         this.MilestoneOKbtn().click();
                         this.Milestonecoursepreview();
                         browser.sleep(500);
                         BrowserUtils.waitUntilReady(this.Homebtn());
                         this.Homebtn().click();
                         browser.sleep(500);
                         this.PublishMilestone();
                         this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                              expect(dis).toBe(true, 'Course is created successfully')
                         })
                    }
                    else {
                         console.log("There are no Tasks assigned on this task type");
                         BrowserUtils.waitUntilReady(this.Cancelicon());
                         browser.sleep(2000);
                         this.Cancelicon().click();
                         browser.sleep(1500);
                         this.Class1().click();
                         browser.sleep(1500);
                         this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                              expect(dis).toBe(true, 'Course cannot be created due to inavilability of tasks')
                         })
                    }
               })
          }









          // this.createNewCourse();
          // var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/Telugu.json', null)
          // browser.sleep(1000);
          // if (dataRecs && dataRecs.length > 0) {
          //      dataRecs.forEach(record => {
          //           this.AddnewActivity().click();
          //           browser.sleep(200);
          //           var Activity = element(by.xpath("//span[text()='" + record.Activitytype + " ']"));
          //           Activity.click();
          //           browser.sleep(1000);
          //           this.TaskNumberfield().sendKeys(this.ClickonRandomArray());
          //           BrowserUtils.selectDropdownValue(by.xpath("//select[@name='taskType']"), record["OfflineTaskType"]);
          //      })
          //      this.PreviewCourse().click();
          //      browser.sleep(1500);
          //      this.Previewclose().click();
          //      browser.sleep(500);
          //      this.SaveCourse().click();
          //      browser.sleep(1000);
          //      BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
          //      this.MilestoneOKbtn().click();
          //      browser.sleep(1000);
          //      BrowserUtils.waitUntilReady(this.Homebtn());
          //      this.Homebtn().click();
          //      this.PublishMilestone();
          //      this.Class1().click();
          //      this.Createnewcoursebutton().isDisplayed().then(function (dis) {
          //           expect(dis).toBe(true, 'Milestone with multiple activity is created successfully ')
          //      })
          // }
     }
     Taskfeildpreview() {
          this.createNewCourse();
          browser.sleep(200);
          BrowserUtils.waitUntilReady(this.TaskPreviewicon());
          var subcreated = element(by.xpath("(//i[@class='fa fa-eye'])[1]"));
          if (subcreated.length > 0) {
               this.TaskPreviewicon().click();
               browser.sleep(1500);
               this.TaskCancelicon().click();
               this.Newtaskbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task feild preview is displayed successfully ')
               })
          }
          else {
               console.log("No tasks available for preview")
          }
     }
     Taskremoval() {
          var subcreated = element(by.xpath("(//i[@class='fa fa-remove'])[1]"));
          if (subcreated.length > 0) {
               this.Taskremovalbtn().click();
               this.Newtaskbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task removal is  successfully ')
               })
          }
          else {
               console.log("No tasks available for remove")
          }
     }
     Taskfeildedit() {
          BrowserUtils.waitUntilReady(this.TaskEditicon());
          var subcreated = element(by.xpath("(//i[@class='fa fa-pencil-square-o'])[1]"));
          if (subcreated.length > 0) {
               this.TaskEditicon().click();
               this.AddMilestoneicon1().click();
               this.AddnewActivity().click();
               browser.sleep(1500);
               this.TabActivity().click();
               browser.sleep(1000);
               BrowserUtils.waitUntilReady(this.TaskNumberfield());
               this.TaskNumberfield().sendKeys(this.ClickonRandomArray());
               this.Taskselection().click();
               BrowserUtils.waitUntilReady(this.Itemsperpage());
               var radio = element(by.xpath("//label[@class='radio']"))
               if (radio.length > 0) {
                    this.Taskcheckround().click();
                    this.AddTask().click();
                    BrowserUtils.scrollIntoView(by.xpath("//button[@class='action-btn ng-star-inserted'][text()='Save']"));
                    browser.sleep(500);
                    this.SaveCourse().click();
                    browser.sleep(1000);
                    BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
                    this.MilestoneOKbtn().click();
                    browser.sleep(1000);
                    this.Milestonecoursepreview();
                    browser.sleep(1000);
                    BrowserUtils.waitUntilReady(this.Homebtn());
                    this.Homebtn().click();
                    browser.sleep(1000);
                    this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                         expect(dis).toBe(true, 'Course can be edited using edit icon')
                    })
               }
               else {
                    console.log("There are no Tasks assigned on this task type");
                    BrowserUtils.waitUntilReady(this.Cancelicon());
                    browser.sleep(2000);
                    this.Cancelicon().click();
                    this.Class1().click();
                    this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                         expect(dis).toBe(true, 'Course can be edited using edit icon')
                    })
               }

          }
          else {
               console.log("No tasks available to edit")
          }
     }
     CoursewithmultipleTasks() {
          var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
          if (dataRecs && dataRecs.length > 0) {
               dataRecs.forEach(record => {
                    browser.ignoreSynchronization = true
                    BrowserUtils.waitUntilReady(this.Createnewcoursebutton());
                    this.Createnewcoursebutton().click();
                    browser.sleep(200);
                    BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subject']"), record["Subject"]);
                    browser.sleep(200);
                    BrowserUtils.selectDropdownValue(by.xpath("//select[@name='year']"), record["Academicyear"]);
                    this.AddMilestonecontainer().click();
                    browser.sleep(200);
                    this.MilestoneUpdateicon().click();
                    browser.sleep(500);
                    BrowserUtils.enterText(by.xpath("//input[@formcontrolname='daysToComplete']"), record["Completiondays"]);
                    this.AddnewActivity().click();
                    browser.sleep(100);
                    this.TabActivity().click();
                    browser.sleep(500);
                    BrowserUtils.enterText(by.xpath("//input[contains(@class,'activityname-cls')]"), record["ActivityName"]);
                    BrowserUtils.getTotalElementCount(by.xpath("//input[contains(@class,'activityname-cls')]")).then((gettaskCount) => {
                         console.log("loc is:" + gettaskCount);
                         for (let taskCount = 1; taskCount <= 4; taskCount++) {
                              browser.ignoreSynchronization = true
                              BrowserUtils.waitUntilReady(this.TaskNumberfield());
                              browser.sleep(500);
                              BrowserUtils.selectDropdownValue(by.xpath("(//select[@ng-reflect-model])[1]"), record["TaskType"]);
                              BrowserUtils.waitUntilReady(this.TaskNumberfield());
                              this.TaskNumberfield().sendKeys(this.ClickonRandomArray());
                              this.Taskselection().click();
                              BrowserUtils.waitUntilReady(this.Itemsperpage());
                              var radio = element.all(by.xpath("(//tr[@class='header-items mat-row ng-star-inserted'])[1]"))
                              if (radio.isEnabled) {
                                   console.log("There are Tasks assigned on this task type");
                                   this.Taskcheckround().click();
                                   this.AddTask().click();
                                   browser.sleep(200);
                              }
                              else {
                                   console.log("There are no Tasks assigned on this task type");
                                   BrowserUtils.waitUntilReady(this.Cancelicon());
                                   browser.sleep(200);
                                   this.Cancelicon().click();

                              }
                              BrowserUtils.scrollIntoView(by.xpath("//span[text()='New Task ']"));
                              browser.sleep(500);
                              this.Newtaskbtn().click();
                         }
                    })
               })
               this.Milestonecoursepreview();
               browser.sleep(500);
               this.SaveCourse().click();
               browser.sleep(500);
               BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
               this.MilestoneOKbtn().click();
               this.Milestonecoursepreview();
               browser.sleep(500);
               BrowserUtils.waitUntilReady(this.Homebtn());
               this.Homebtn().click();
               browser.sleep(500);
               this.PublishMilestone();
               this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Course can be created  with Multiple tasks')
               })

          }
     }
     Coursewithmultipletasks() {
          browser.ignoreSynchronization = true
          var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/Maths.json', null)
          if (dataRecs && dataRecs.length > 0) {
               dataRecs.forEach(record => {
                    BrowserUtils.waitUntilReady(this.Createnewcoursebutton());
                    this.Createnewcoursebutton().click();
                    browser.sleep(2000);
                    BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subject']"), record["Subject"]);
                    browser.sleep(1000);
                    BrowserUtils.selectDropdownValue(by.xpath("//select[@name='year']"), record["Academicyear"]);
                    this.AddMilestonecontainer().click();
                    BrowserUtils.waitUntilReady(this.AddMilestoneicon());
                    this.AddMilestoneicon().click();
                    BrowserUtils.waitUntilReady(this.AddnewActivity());
                    BrowserUtils.enterText(by.xpath("//input[@formcontrolname='daysToComplete']"), record["Completiondays"]);
                    this.AddnewActivity().click();
                    browser.sleep(1500);
                    this.TabActivity().click();
                    BrowserUtils.enterText(by.xpath("//input[contains(@class,'activityname-cls')]"), record["ActivityName"]);
                    BrowserUtils.selectDropdownValue(by.xpath("//select[@name='taskType']"), record["TaskTypePractice"]);
                    browser.sleep(2000);
                    BrowserUtils.waitUntilReady(this.TaskNumberfield());
                    this.TaskNumberfield().sendKeys(this.ClickonRandomArray());
                    this.Taskselection().click();
                    browser.sleep(2000);
                    BrowserUtils.getTotalElementCount(by.xpath("//tr[@class='header-items mat-row ng-star-inserted']")).then((gettaskCount) => {
                         console.log("loc is:" + gettaskCount);
                         if (gettaskCount) {
                              browser.ignoreSynchronization = true
                              browser.sleep(2000);
                              console.log("There are Tasks assigned on this task type");
                              this.Taskcheckround().click();
                              this.AddTask().click();
                              BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
                              browser.sleep(500);
                              this.SaveCourse().click();
                              browser.sleep(500);
                              BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
                              this.MilestoneOKbtn().click();
                              this.Milestonecoursepreview();
                              browser.sleep(500);
                              BrowserUtils.waitUntilReady(this.Homebtn());
                              this.Homebtn().click();
                              browser.sleep(500);
                              this.PublishMilestone();
                              this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                                   expect(dis).toBe(true, 'Course is created successfully')
                              })
                         }
                         else {
                              browser.ignoreSynchronization = true
                              console.log("There are no Tasks assigned on this task type");
                              BrowserUtils.waitUntilReady(this.Cancelicon());
                              browser.sleep(2000);
                              this.Cancelicon().click();
                              browser.sleep(1500);
                              this.Class1().click();
                              browser.sleep(1500);
                              this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                                   expect(dis).toBe(true, 'Course cannot be created due to inavilability of tasks')
                              })
                         }
                    })
               })
          }
     }


     Taskactivities() {
          this.createNewCourse();
          BrowserUtils.getTotalElementCount(this.taskcloneicon()).then((getcloneiconCount) => {
               expect(getcloneiconCount).toBeGreaterThanOrEqual(1);
               for (let cloneiconCount = 1; cloneiconCount < getcloneiconCount; cloneiconCount++) {
                    var loc = "(//i[@class='fa fa-clone'])[" + cloneiconCount + "]";
                    var cloneiconselection = by.xpath(loc);
                    BrowserUtils.clickOnElement(cloneiconselection);
               }
          })
          expect(this.taskcloneicon()).toBeGreaterThanOrEqual(1);
          this.taskdeleteicon();

     }

     ClickonRandomElem(EnterElementLoc) {
          var allOptions = EnterElementLoc.all(by.tagName('option'));
          allOptions.count().then(function (numberOfItems) {
               return Math.floor(Math.random() * numberOfItems) + 1;
          }).then(function (randomNumber) {
               allOptions.get(randomNumber).click();
          });
     }
     ClickonRandomArray() {
          var myArray = ['1a', '1.1a', '1.2a', '1.3a', '1.4a', '1.5a', '1.6a', '2.0a', '2.1s', '2.s2', '2.s3', '2.4s', '2f.5', '2.6g', '3.0g', '3.1g', '3.2g', '3.g3', '3.4g', '3.g5', '3.6g', '4.1g', '4.1g', '4.2g', '4.3g', '4.4g', '4.g5', '4.g6', '5.g0', '5.g1', '5.g2', '5.d3', '5.4d', '5.d5', '5.d6', '6.d0', '6.d1', '6.d2', '6.w3', '6.4w', '6.5w', '6.6w', '1.0w', '1.1e1', '1.2e1', '1.3e1', '1.e41', '1.51e', '1.61e', '2.0e1', '2.1e1', '2.2e1', '2.3e1', '2.4e1', '2.5e1', '2.6e1', '3.0e1', '3.1e1', '3.2e1', '3.31r', '3.41r', '3.5r1', '3.r61', '4r.11', '4.1t2', '4.2t1', '4.t31', '4.t41', '4.5t1', '4.t61', '5.0t1', '5.1t1', '5.2t1', '5.3t1', '5.4t1', '5.51t', '5.6u1', '6.u01', '6.11u', '6.2u1', '6.31u', '6.u41', '6.5u1', '6.u61', '1.21u2', '1.12', '1.22', '1.32i', '1.i42', '1.5i2', '1.6i2', '2.0o2', '2.12o', '2.22o', '2.32o', '2.4o2', '2.52o', '2.6o2', '3.l02', '3.1l2', '3.2l2', '3.3l2', '3.4l2', '3.5l2', '3.6x2', '4.12x', '4.12x3', '4.22c', '4.32c', '4.42c', '4.52c', '4.6c2', '5.0c2', '5.c12', '5.22b', '5.3b2', '5.4n2', '5.52', '5.62', '6.02', '6.12', '6.22', '6.32', '6.42', '6.52', '6.62'];
          var rand = myArray[Math.floor(Math.random() * myArray.length)];
          return rand;

     }
     SelectRandomTask() {
          this.ClickonRandomElem(this.Taskcheckrandomround());
          this.AddTask().click();
     }
     SelectrandomTasktype() {
          this.Tasktypedropdown().click();
          this.ClickonRandomElem(this.Tasktypedropdown());

     }
     EditTaskinactivityPopup() {
          this.createNewCourse();
          this.Taskselection().click();
          BrowserUtils.waitUntilReady(this.Itemsperpage());
          var Tasklink = by.xpath("//a[@class='task-link']");
          BrowserUtils.getTotalElementCount(Tasklink).then((getTasklinkCount) => {
               expect(getTasklinkCount).toBeGreaterThanOrEqual(1);
               for (let TasklinkCount = 1; TasklinkCount <= getTasklinkCount; TasklinkCount++) {
                    var loc = "(//a[@class='task-link'])[" + TasklinkCount + "]";
                    var Tasklinkselection = by.xpath(loc);
                    BrowserUtils.clickOnElement(Tasklinkselection);
               }
          })
     }
}