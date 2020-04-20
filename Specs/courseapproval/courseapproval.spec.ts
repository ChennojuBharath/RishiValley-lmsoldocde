import { courseapprovalPage } from '../../Pages/courseapproval.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let approval: courseapprovalPage
approval = new courseapprovalPage();

describe('Course approval flow ', () => {

   it('Verify reviewer is able to login successfully', () => {
    approval.Keycloaklogin();
   });

   it('Verify review tasks and send for approval is successful', () => {
    approval.approvetasks();
   });
//    it('Verify review tasks and send for approval is successful without comments', () => {
//       Reviewer.Reviewtaskswithoutcomments();
//    });
//    it('Verify created tasks can be drafted', () => {
//       Reviewer.conformdraftreviewtasks();
//    });
//    it('Verify created tasks can be drafted', () => {
//       Reviewer.canceldraftreviewtasks();
//    });
//    it('Verify comments for tasks can be edited', () => {
//       Reviewer.editcomments();
//    });
//    it('Verify comments for tasks can be deleted', () => {
//       Reviewer.deletecomments();
//    });
//    it('Verify delete is working for task table', () => {
//       Reviewer.deletetasks();
//    });
})