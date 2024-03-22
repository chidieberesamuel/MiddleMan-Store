const tableHeading = ["Name", "Height", "Country"];
const tableValues = [
  { Name: "Kilimajaro", Height: "5895",Country: "Tanzania"},
  { Name: "Samuel", Height: "1.78",Country: "Nigeria"},
  { Name: "Ronaldo", Height: "1.95",Country: "Portugal"},
];

function createTable(heading, values) {
  var table = document.createElement("table");
  var tableHead = document.createElement("thead");
  var tableBody = document.createElement("tbody");

  //Create table header row
  var headerRow = document.createElement("tr");
  heading.forEach(function(headingText) {
     var th = document.createElement("th");
     th.textContent = headingText;
     headerRow.oppendchild(th);
     // th,style.display = 'flex';
  });

  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);
  headerRow.style.fontSize = '40px';


  //Create table body rows
  values.forEach(function(rowData) {
    var row = document.createElement("tr");
    Object.values(rowData).forEach(function(value) {
      var cell = document.createElementment("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    table.appendChild(tableBody);
  });
  table.appendChild(tableBody);

  return table;
}


var tableContainer = document.getElementById("table-container");
var table = createTable(tableHeading, tebleValues);
tableContainer.appendChild(table);





//Tagname 
var paragraphs = document.getElementsByTagName("p");
var paragraphValues = [];

for (var i = 0; i < paragraphs.length; i++) {
  paragraphValues.push(paragraphs[i].textContent);
}
console.log(paragraphValues);


