let products = require("../products");

module.exports.list = function list(req,res){
    return res.json(products);
}
module.exports.show = function show(req,res){
    return res.json(products[req.params.id-1]);
}
module.exports.create = function create(req,res){
    req.body["_id"] = products[products.length-1]._id+1;
    products.push(req.body);
    return res.json(products);
}
module.exports.update = function update(req,res){
    return false;
}
module.exports.remove = function remove(req,res){
    return false;
}
