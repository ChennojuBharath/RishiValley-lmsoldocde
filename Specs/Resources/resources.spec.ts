import { Resources } from '../../Pages/resources.po';

describe('Course Creation Page', () => {
    let Resource: Resources
    Resource = new Resources();
    it('Verify Resource can  be created', () => {
      Resource.Createresources();
      });


})