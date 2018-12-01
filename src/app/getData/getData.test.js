import getData from './getData';
jest.mock('./getData');
describe('getData', () => {
  it('should fetch data', async () => {
    const data = await getData();
    expect(data).toEqual([
      {
        Brand: 'Lenovo',
        Brand: 'Lenovo',
        DeviceName: 'Lenovo P70',
        alert_types: 'Vibration; MP3, WAV ringtones',
        announced: '2015, January',
        battery_c: 'Non-removable Li-Po 4000 mAh battery',
        bluetooth: 'v4.0, A2DP'
      }
    ]);
  });
});
