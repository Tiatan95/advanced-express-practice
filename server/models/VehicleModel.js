let mongoose = require("mongoose");

const schema = new mongoose.Schema({
    year: {
      required: true,
      type: String
    },
    make: {
        type: String
    },
    model : {
        type: String
    }
   });


module.exports =  mongoose.model("Vehicle", schema); ///Converts this to "contacts"