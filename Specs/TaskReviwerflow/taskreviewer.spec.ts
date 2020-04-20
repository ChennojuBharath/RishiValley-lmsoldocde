import { Reviewerview } from '../../Pages/taskreviewer.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let Reviewer: Reviewerview
Reviewer = new Reviewerview();
let taskPg: tasksPage
taskPg = new tasksPage();
describe('Reviewer flow ', () => {
   it('Verify reviewer is able to login successfully', () => {
      Reviewer.Keycloaklogin();
   });
   it('Verify tasks by performing click action on every class', () => {
      taskPg.ClickAllclasses();
   });
   it('Verify the tab click for Subject tabs', () => {
      taskPg.ClickAllsubjects();
   });
   it('Verify review tasks and send for approval is successful', () => {
      Reviewer.Reviewtasks();
   });
   it('Verify review tasks and send for approval is successful without comments', () => {
      Reviewer.Reviewtaskswithoutcomments();
   });
   it('Verify created tasks can be drafted', () => {
      Reviewer.conformdraftreviewtasks();
   });
   it('Verify created tasks can be drafted', () => {
      Reviewer.canceldraftreviewtasks();
   });
   it('Verify comments for tasks can be edited', () => {
      Reviewer.editcomments();
   });
   it('Verify comments for tasks can be deleted', () => {
      Reviewer.deletecomments();
   });
   it('Verify delete is working for task table', () => {
      Reviewer.deletetasks();
   });
})