//let contact_list = require("../contacts");
const ContactModel = require("../models/ContactModel");

module.exports.list = function list(req, res) {
    ContactModel.find({}).exec()
    .then(contacts => {
        return res.json(contacts);
    })
    
}
module.exports.show = function show(req,res) {
    ContactModel.findById(req.params.id).exec()
    .then(contact => {
        return res.json(contact);
    })
} 
module.exports.create = function create(req,res) {

    const newContact = new ContactModel(req.body)

    newContact.save()
    .then(contact => {
        return res.json(contact)
    })
}
module.exports.update = function update(req,res) {
    return false;
}
module.exports.remove = function remove(req,res){
    return false;
}