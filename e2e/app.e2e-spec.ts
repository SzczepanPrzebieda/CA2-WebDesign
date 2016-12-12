import { CA2WebDesignPage } from './app.po';

describe('ca2-web-design App', function() {
  let page: CA2WebDesignPage;

  beforeEach(() => {
    page = new CA2WebDesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
