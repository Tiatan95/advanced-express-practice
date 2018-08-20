//let comments = require("../comments");
const CommentModel = require("../models/CommentModel");

module.exports.list = function list(req,res) {
    CommentModel.find({}).exec()
    .then(comment => {
        return res.json(comment);
    })
}
module.exports.show = function show(req,res) {
    CommentModel.findById(req.params.id).exec()
    .then(comment => {
        return res.json(comment);
    })
} 

module.exports.create = function create(req,res) {

    const newComment = new CommentModel(req.body);

    newComment.save()
    .then(comment => {
        return res.json(comment)
    })
}

module.exports.update = function update(req,res,next) {
    return false;
}

module.exports.remove = function remove(req,res,next) {
    return false;
}