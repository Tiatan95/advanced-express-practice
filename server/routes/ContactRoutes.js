let express = require('express')
const router = express.Router();
let {list,show,create,update,remove} = require('../controllers/ContactController');
let bodyParser = require("body-parser")

router.use(bodyParser.json());

router.get("/contacts", list);
router.get("/contact/:id",show);
router.post("/contacts",create);
router.post("/contacts/:id",update);
router.delete("contacts/:id",remove);

module.exports = router;