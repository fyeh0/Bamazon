$(document).ready(function() {
  console.log("slgh;ogj");
});

$.get("/api/product", function(data) {
  for (var i = 0; i < data.length; i++) {
    var tRow = $("<tr>");

    var productName = $("<td>").append(data[i].product_name);
    var departmentName = $("<td>").text(data.department_name);
    var price = $("<td>").text(data.price);
    var stock = $("<td>").text(data.stock_quantity);

    tRow.append(productName, departmentName, price, stock);
    $("tBody").append(tRow);
  }
});

console.log("here");
