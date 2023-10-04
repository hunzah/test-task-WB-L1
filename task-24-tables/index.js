document.addEventListener("DOMContentLoaded", async function () {

  const apiUrl =
    "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true";

  const tableBody = document.getElementById("table-body");
  const loadingMessage = document.getElementById("loading-message");

// для сортировки
  const columns = {
    name: { sortOrder: 1 }, // 1 для сортировки по возрастанию, -1 для сортировки по убыванию
    lastName: { sortOrder: 1 },
    phone: { sortOrder: 1 },
    address: { sortOrder: 1 },
    city: { sortOrder: 1 },
    state: { sortOrder: 1 },
    mail: { sortOrder: 1 },
  };

// для пагинации
  const prevPageButton = document.getElementById("prevPage");
  const nextPageButton = document.getElementById("nextPage");
  const itemsPerPage = 50;
  let currentPage = 1;
  let data = [];

// логика сортировки
const sortTable = (columnName) => {
  // Меняем порядок сортировки для данной колонки
  columns[columnName].sortOrder *= -1;
  const removeNonAlphanumeric = (str) => {
    return str.replace(/[^a-zA-Z0-9]/g, '');
  };
  data.sort((a, b) => {
    const valueA = removeNonAlphanumeric(columnName === "name" ? a.fname : a.lname);
    const valueB = removeNonAlphanumeric(columnName === "name" ? b.fname : b.lname);
    const sortOrder = columns[columnName].sortOrder;
    if (!isNaN(valueA) && !isNaN(valueB)) {
      // Если оба значения числовые, сравниваем их как числа
      return (Number(valueA) - Number(valueB)) * sortOrder;
    }
    // Иначе, сравниваем как строки
    return valueA.localeCompare(valueB) * sortOrder;
  });

  displayData();
};

const columnNames = ["name", "lastName", "phone", "address", "city", "state", "mail"];

columnNames.forEach((columnName) => {
  const columnHeader = document.getElementById(columnName);
  columnHeader.addEventListener("click", () => sortTable(columnName));
});


// loader
  loadingMessage.style.display = "block";
  
// получение и отрисовка данных
  try {
    const response = await fetch(apiUrl);
    data = await response.json();
    loadingMessage.style.display = "none";

    function displayData() {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentPageData = data.slice(startIndex, endIndex);

      tableBody.innerHTML = "";


      currentPageData.forEach((item) => {
        const newRow = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = item.fname;

        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = item.lname;

        const telCell = document.createElement("td");
        telCell.textContent = item.tel;

        const addressCell = document.createElement("td");
        addressCell.textContent = item.address;

        const cityCell = document.createElement("td");
        cityCell.textContent = item.city;

        const stateCell = document.createElement("td");
        stateCell.textContent = item.state;

        const zipCell = document.createElement("td");
        zipCell.textContent = item.zip;

        newRow.appendChild(firstNameCell);
        newRow.appendChild(lastNameCell);
        newRow.appendChild(telCell);
        newRow.appendChild(addressCell);
        newRow.appendChild(cityCell);
        newRow.appendChild(stateCell);
        newRow.appendChild(zipCell);

        tableBody.appendChild(newRow);
      });

      prevPageButton.disabled = currentPage === 1;
      nextPageButton.disabled = endIndex >= data.length;
    }

    // Обработчики кнопок пагинации
    prevPageButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayData();
      }
    });

    nextPageButton.addEventListener("click", () => {
      const startIndex = currentPage * itemsPerPage;
      if (startIndex < data.length) {
        currentPage++;
        displayData();
      }
    });

    displayData();
  } catch (error) {
    loadingMessage.style.display = "none";
    alert(error);
  }
});

