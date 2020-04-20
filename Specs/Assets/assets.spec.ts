import { Assets } from '../../Pages/assets.po';

describe('Course Creation Page', () => {
    let Asset: Assets
    Asset = new Assets();
    it('Verify Assets can  be created', () => {
        Asset.Createassets();
      });
      it('Verify Assets can  be updated', () => {
        Asset.Updateassets();
      });

})