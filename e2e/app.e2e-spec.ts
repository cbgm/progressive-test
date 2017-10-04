import { ProgressiveTestPage } from './app.po';

describe('progressive-test App', () => {
  let page: ProgressiveTestPage;

  beforeEach(() => {
    page = new ProgressiveTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
