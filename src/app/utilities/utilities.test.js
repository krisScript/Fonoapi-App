import utilities from './utilities';
describe('utilities', () => {
  describe('createTableBody', () => {
    const testObject = {
      title: 'testObject',
      purpose: 'testing'
    };
    const testBody = `<tr>
    <td>title</td>
     <td>testObject</td>
    </tr><tr>
    <td>purpose</td>
     <td>testing</td>
    </tr>`;

    const tableBody = utilities.createTableBody(testObject);
    it('should have TBODY tag', () => {
      expect(tableBody.tagName).toMatch('TBODY');
    });
    it('should have the same innerHtml as testBody', () => {
      expect(tableBody.innerHTML).toMatch(testBody);
    });
  });
});
