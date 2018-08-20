//let vehicles = require("../vehicles");
let VehicleModel = require("../models/VehicleModel");


module.exports.list = function list(req,res){
    VehicleModel.find({}).exec()
    .then( vehicles => {
        return res.json(vehicles);
    })
}
module.exports.show = function show(req,res) {
    VehicleModel.findById(req.params.id).exec()
    .then(vehicle => {
        return res.json(vehicle);
    })
}
module.exports.create = function create(req,res) {

    const newVehicle = new VehicleModel(req.body)

    newVehicle.save()
    .then(vehicle => {
        return res.json(vehicle)
    })
}
module.exports.update = function update(req,res) {
    return false;
}
module.exports.remove = function remove(req,res) {
    return false;
}
