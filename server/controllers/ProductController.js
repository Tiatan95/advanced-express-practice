//let products = require("../products");
let ProductModel = require("../models/ProductModel");

module.exports.list = function list(req,res){
    ProductModel.find({}).exec()
    .then(products => {
        return res.json(products);
    })
}
module.exports.show = function show(req,res){
    ProductModel.findById(req.params.id).exec()
    .then(product => {
        return res.json(product);
    })
}
module.exports.create = function create(req,res){

    const newProduct = new ProductModel(req.body)

    newProduct.save()
    .then(contact => {
        return res.json(contact)
    })
}
module.exports.update = function update(req,res){
    return false;
}
module.exports.remove = function remove(req,res){
    return false;
}
