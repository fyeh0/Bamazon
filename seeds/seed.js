const db = require("../models");
const products = require("./product")

db.sequelize
  .sync({ force: true })
  .then(function() {
    db.Product.bulkCreate(products).then(function(rows) {
      console.log("SEEEEEEEEEEDS")
    }).catch(function(err) {
      console.log(err)
    })
  })