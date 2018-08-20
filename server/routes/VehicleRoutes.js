let express = require("express");
const router = express.Router();
let {list,show,create,update,remove} = require("../controllers/VehicleController");
let bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get('/vehicles',list);
router.get('/vehicle/:id',show);
router.post('/vehicles',create);
router.post('/vehicles/:id',update);
router.delete('/vehicles/:id',remove);

module.exports = router;