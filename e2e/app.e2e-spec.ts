import { ProfilesAppPage } from './app.po';

describe('profiles-app App', () => {
  let page: ProfilesAppPage;

  beforeEach(() => {
    page = new ProfilesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
