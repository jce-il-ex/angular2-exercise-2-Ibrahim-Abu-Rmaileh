import { Tar2Page } from './app.po';

describe('tar2 App', function() {
  let page: Tar2Page;

  beforeEach(() => {
    page = new Tar2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
