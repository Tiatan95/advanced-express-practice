let express = require('express');
const router = express.Router();
let{list,show,create,update,remove} = require('../controllers/CommentController');

let bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get('/comments',list);
router.get('/comment/:id',show);
router.post('/comments',create);
router.post('/comments/:id',update);
router.delete('/comments/:id',remove);

module.exports = router;