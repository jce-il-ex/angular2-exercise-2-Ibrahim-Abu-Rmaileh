import { CompappPage } from './app.po';

describe('compapp App', function() {
  let page: CompappPage;

  beforeEach(() => {
    page = new CompappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
