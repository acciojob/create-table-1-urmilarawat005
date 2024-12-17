function insert_Row() {
    //Write your code here
  var table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0)
    var newRow = table.insertRow(0);

    // Insert two new cells into the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Set the text content of the cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
  
}
