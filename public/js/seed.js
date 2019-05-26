const db = require("../models");
const product = require("./product.json");
// const posts = require("./posts.json");

db.sequelize.sync({ force: true }).then(function () {
    return db.product.bulkCreate(product);
// }).then(function () {
//     return db.Post.bulkCreate(posts);
}).then(function () {
    db.sequelize.close();
});