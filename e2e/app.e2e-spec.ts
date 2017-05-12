import { TubeListClientPage } from './app.po';

describe('tube-list-client App', function() {
  let page: TubeListClientPage;

  beforeEach(() => {
    page = new TubeListClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
