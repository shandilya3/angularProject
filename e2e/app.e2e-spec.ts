import { Vehicle1Page } from './app.po';

describe('vehicle1 App', () => {
  let page: Vehicle1Page;

  beforeEach(() => {
    page = new Vehicle1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
