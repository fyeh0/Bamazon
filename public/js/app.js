$(document).ready(function() {
    // rendering db to browser
  $.get("/api/products", function(data) {
    console.log("here");
    for (var i = 0; i < data.length; i++) {
      var tRow = $("<tr>");

      var productName = $("<td>").append(data[i].product_name);
      var departmentName = $("<td>").append(data[i].department_name);
      var price = $("<td>").append(data[i].price);
      var stock = $("<td>").append(data[i].stock_quantity);
      var quantity = $("<td>").append(`<input type="text" placeholder="Please select quantity">`);

      tRow.append(productName, departmentName, price, stock, quantity);
      $("tBody").append(tRow);
    }
  });

    // buttooooooooooooon


});
