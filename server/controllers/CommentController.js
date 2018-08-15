let comments = require("../comments");

module.exports.list = function list(req,res) {
    return res.json(comments);
}

module.exports.show = function show(req,res) {
    return res.json(comments[req.params.id-1]);
} 

module.exports.create = function create(req,res) {
    req.body["_id"] = comments[comments.length-1]._id+1;
    comments.push(req.body);
    return res.json(comments);
}

module.exports.update = function update(req,res,next) {
    return false;
}

module.exports.remove = function remove(req,res,next) {
    return false;
}