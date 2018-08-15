let vehicles = require("../vehicles");

module.exports.list = function list(req,res){
    return res.json(vehicles);
}
module.exports.show = function show(req,res) {
    return res.json(vehicles[req.params.id-1]);
}
module.exports.create = function create(req,res) {
    req.body["_id"] = vehicles[vehicles.length-1]._id+1;
    comments.push(req.body);
    return res.json(comments);
}
module.exports.update = function update(req,res) {
    return false;
}
module.exports.remove = function remove(req,res) {
    return false;
}
