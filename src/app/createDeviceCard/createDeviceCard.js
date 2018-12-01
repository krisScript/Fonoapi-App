import utilities from '../utilities/utilities';
const createDeviceCard = device => {
  const deviceCard = document.createElement('div');
  deviceCard.className = 'device-card';
  const deviceTable = document.createElement('table');
  deviceTable.innerHTML = `
    <thead>
      <tr>
        <th>Info</th>
        <th>Description</th>
      </tr>
    </thead>
    `;
  const tableBody = utilities.createTableBody(device);
  deviceTable.appendChild(tableBody);
  deviceCard.appendChild(deviceTable);
  return deviceCard;
};
export default createDeviceCard;
