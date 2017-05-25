import { HidromedPage } from './app.po';

describe('hidromed App', () => {
  let page: HidromedPage;

  beforeEach(() => {
    page = new HidromedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
