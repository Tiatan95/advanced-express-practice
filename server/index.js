let express = require("express");

const CommentRoutes = require("./routes/CommentRoutes");
const ContactRoutes = require("./routes/ContactRoutes");
const VehicleRoutes = require("./routes/VehicleRoutes");
const ProductRoutes = require("./routes/ProductRoutes");

let bodyParser = require("body-parser")
let app = express();

app.use(bodyParser.json());
app.use(CommentRoutes);
app.use(ContactRoutes);
app.use(VehicleRoutes);
app.use(ProductRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
console.log(`Listening on port:${port}`);
});