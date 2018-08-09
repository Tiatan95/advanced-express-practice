let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");
let bodyParser = require("body-parser")
let app = express();
app.use(bodyParser.json());

//Return All Information
app.get('/comments', function(req,res,next){
    return res.send(comments);
})
app.get('/products', function(req,res,next){
    return res.send(products);
})
app.get('/vehicles', function(req,res,next){
    return res.send(vehicles);
})
app.get('/contacts', function(req,res,next){
    return res.send(contacts);
})

//Return Specific information
app.get('/comment/:userId', function(req,res,next){
    return res.send(comments[req.params.userId-1]);
})
app.get('/product/:userId', function(req,res,next){
    return res.send(products[req.params.userId-1]);
})
app.get('/vehicle/:userId', function(req,res,next){
    return res.send(vehicles[req.params.userId-1]);
})
app.get('/contact/:userId', function(req,res,next){
    return res.send(contacts[req.params.userId-1]);
})

//Create 
app.post('/comments', function(req, res, next) { 
    req.body["_id"] = comments[comments.length-1]._id+1;
    comments.push(req.body);
    return res.send(comments);
})
app.post('/products', function (req,res,next) {
    req.body["_id"] = products[products.length-1]._id+1;
    products.push(req.body);
    return res.send(products);
})
app.post('/vehicles', function(req,res, next) {
    req.body["_id"] = vehicles[vehicles.length-1]._id+1;
    vehicles.push(req.body);
    return res.send(vehicles);
})
app.post('/contacts', function(req,res,next){
    req.body["_id"] = comments[comments.length-1]._id+1;
    contacts.push(req.body);
    return res.send(contacts);
})

app.listen(3001, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now living in apartment 3002");
});