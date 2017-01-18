import { DiditPage } from './app.po';

describe('didit App', function() {
  let page: DiditPage;

  beforeEach(() => {
    page = new DiditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
