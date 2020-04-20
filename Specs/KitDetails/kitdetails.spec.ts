import { kitDetails } from '../../Pages/kitdetails.po';

describe('Course Creation Page', () => {
    let kit: kitDetails
    kit = new kitDetails();
    it('Verify kit with cards selection can  be created', () => {
        //kit.Createcards();
        //kit.CreateAidsnoncards();
        kit.CreateLaddernoncards();
        //kit.CreateOthersnoncards();
      });


})