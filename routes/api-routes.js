var db = require("../models");
// var Product = require("../config/Product.json");

module.exports = function(app) {
    app.get("/api/products", function(req, res) {
        db.Product.findAll().then(function(dbProduct) {
            console.log("all)");
            res.json(dbProduct);
        });
    });

}