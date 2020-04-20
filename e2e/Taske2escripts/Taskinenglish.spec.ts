import { fillintheblanksPage } from '../../Pages/fillintheblanks.po';
import { rearrangingPage } from '../../Pages/rearranging.po';
import { trueorfalsePage } from '../../Pages/trueorfalse.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
import { sortingPage } from '../../Pages/sorting.po';
import { tapandlistenPage } from '../../Pages/tapandlisten.po';
import { matchtheFollowingPage } from '../../Pages/matchtheFollowing.po';
let fillintheblanks: fillintheblanksPage
fillintheblanks = new fillintheblanksPage();
let Rearranging: rearrangingPage
Rearranging = new rearrangingPage();
let trueorfalsePg: trueorfalsePage
trueorfalsePg = new trueorfalsePage();
let taskPg: tasksPage
taskPg = new tasksPage();
let Sorting: sortingPage
Sorting = new sortingPage();
let Tapandlisten: tapandlistenPage
Tapandlisten = new tapandlistenPage();
let matchtheFollowing: matchtheFollowingPage
matchtheFollowing = new matchtheFollowingPage()
describe('Run the LMS scripts end to end', () => {
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Create fill in the blanks task with english subject', () => {
        fillintheblanks.Fibtaskwithenglishdata();
    })
    it('Create Rearranging task with Images with english subject', () => {
        Rearranging.createRearrangingTaskwithImageseng();
    });
    it('Create Rearranging task with Text with english subject', () => {
        Rearranging.createRearrangingTaskwithTexteng();
    });
    it('Check for the task with pictureandtext can be created with english subject', () => {
        trueorfalsePg.createTrueorfalsetaskwithtextenglish();
    });
    it('Check for the task with pictureandtext can be created with english subject', () => {
        trueorfalsePg.createTrueorfalsetaskwithpictureandtextenglish();
    });
    it('Create task flow check for TapingMCQ with Text to Text with english subject', () => {
        taskPg.createTappingMCQTaskenglish();
    });
    it('Create Sorting task with Text with english subject', () => {
        Sorting.createTextSortingTaskenglish();
    });
    it('Create Sorting task with Image with english subject', () => {
        Sorting.createImageSortingTaskenglish();
    });
    it('Create Tap and Listen task with Text with audio with english subject', () => {
        Tapandlisten.createTapandlistenTaskwithTextenglish();
    });
    it('Create Tap and Listen task with Picture and Text with audio with english subject', () => {
        Tapandlisten.createTapandlistenTaskwithPictureandTextenglish();
    });
    it('Create task flow check for Matchthefollowing for Image to Image selection with english subject', () => {
        matchtheFollowing.createMatchthefollowingImagetoImageTaskenglish();
    });
    it('Create task flow check for Matchthefollowing for Text to Image selection with english subject', () => {
        matchtheFollowing.createMatchthefollowingTexttoImageTaskenglish();
    });
    it('Create task flow check for Matchthefollowing for Text to Text selection with english subject', () => {
        matchtheFollowing.createMatchthefollowingTexttoTextTaskenglish();
    });
    it('Create task flow check for Matchthefollowing for Image to Text selection with english subject', () => {
        matchtheFollowing.createMatchthefollowingImagetoTextTaskenglish();
    });
})