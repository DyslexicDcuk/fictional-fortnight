import { JsonServerCommunicationExamplePage } from './app.po';

describe('json-server-communication-example App', function() {
  let page: JsonServerCommunicationExamplePage;

  beforeEach(() => {
    page = new JsonServerCommunicationExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
