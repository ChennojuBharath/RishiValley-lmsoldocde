import { Approverview } from '../../Pages/taskapprover.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let Approver: Approverview
Approver = new Approverview();
let taskPg: tasksPage
taskPg = new tasksPage();
describe('Approver flow ', () => {
  it('Verify reviewer is able to login successfully', () => {
    Approver.Keycloaklogin();
  });
  it('Verify tasks by performing click action on every class', () => {
    taskPg.ClickAllclasses();
  });
  it('Verify the tab click for Subject tabs', () => {
    taskPg.ClickAllsubjects();
  });
  it('Verify approver is able to approve task successfully', () => {
    Approver.Approvetask();
  });
  it('Verify review tasks and send for approval is successful without comments', () => {
    Approver.Approvetaskswithoutcomments();
  });
  it('Verify created tasks can be drafted', () => {
    Approver.conformdraftapprovetasks();
  });
  it('Verify created tasks can be drafted', () => {
    Approver.canceldraftapprovetasks();
  });
  it('Verify comments for tasks can be edited', () => {
    Approver.editcomments();
  });
  it('Verify comments for tasks can be deleted', () => {
    Approver.deletecomments();
  });
  it('Verify delete is working for task table', () => {
    Approver.deletetasks();
  });
})