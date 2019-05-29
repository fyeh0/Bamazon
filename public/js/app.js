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
      var quantity = $("<td>").append(`<input type="text" placeholder="Please select quantity" id="qty">`);

      tRow.append(productName, departmentName, price, stock, quantity);
      $("#product-area").append(tRow);
    }
  });

    // method to query user quantity inputs and display in cart
    $.get("api/products", function(data) {
        
        var quantitySelected = $(`#qty${data.id}`).val();
        var cart;


        if (quantitySelected <= data.stock_quantity) {
           var tRow = $("<tr>");
           var productName = $("<td>").append(data[i].product_name);
           var price = $("<td>").append(data[i].price);

           tRow.append(productName, price, quantitySelected)
           $("#cart-area").append(tRow);
           console.log(quantitySelected);
        }

        // semi complete logic
        // user enters desired quantity to buy
        // desired quantity is queried and stored as variable
        // user clicks "submit" which routes to cart.html
        // if quantities selected && stock is available, items are rendered to dom
        // else display default empty cart text
        // last row: display total cost of all user selected items and quantities
        // ta da
    })

});
