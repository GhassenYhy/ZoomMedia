import { DriveSafeV3Page } from './app.po';

describe('drive-safe-v3 App', () => {
  let page: DriveSafeV3Page;

  beforeEach(() => {
    page = new DriveSafeV3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
