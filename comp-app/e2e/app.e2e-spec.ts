import { CompAppPage } from './app.po';

describe('comp-app App', function() {
  let page: CompAppPage;

  beforeEach(() => {
    page = new CompAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
