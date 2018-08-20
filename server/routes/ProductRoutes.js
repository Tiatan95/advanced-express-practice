let express = require('express');
const router = express.Router();
let {list,show,create,update,remove} = require("../controllers/ProductController");
let bodyParser = require("body-parser")

router.use(bodyParser.json());

router.get('/products',list);
router.get('/product/:id',show);
router.post('/products',create);
router.post('/product/:id',update);
router.delete('/product/:id',remove);

module.exports = router;