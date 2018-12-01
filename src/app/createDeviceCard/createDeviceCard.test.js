import createDeviceCard from './createDeviceCard';
describe('createDeviceCard', () => {
  const testObject = {
    title: 'testObject',
    purpose: 'testing'
  };
  const deviceCard = createDeviceCard(testObject);
  it('should have DIV tag', () => {
    expect(deviceCard.tagName).toMatch('DIV');
  });
  it('should have "device-card" class', () => {
    expect(deviceCard.className).toMatch('device-card');
  });
});
