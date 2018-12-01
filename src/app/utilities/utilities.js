const createTableBody = object => {
  const tableBody = document.createElement('tbody');
  Object.entries(object).forEach(entry => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${entry[0]}</td>
     <td>${entry[1]}</td>
    `;
    tableBody.appendChild(tr);
  });
  return tableBody;
};
const utilities = {
  createTableBody
};
export default utilities;
