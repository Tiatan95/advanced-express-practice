let contacts = require("../contacts");

module.exports.list = function list(req, res) {
    return res.json(contacts);
}
module.exports.show = function show(req,res) {
    return res.json(contacts[req.params.id-1]);
} 
module.exports.create = function create(req,res) {
    req.body["_id"] = contacts[contacts.length-1]._id+1;
    contacts.push(req.body);
    return res.json(contacts);
}
module.exports.update = function update(req,res) {
    return false;
}
module.exports.remove = function remove(req,res){
    return false;
}