var express = require('express');
var router = express.Router();
const shinobisCtrl = require('../controllers/shinobis')



/* GET users listing. */
router.get('/', shinobisCtrl.index)
router.get('/new', shinobisCtrl.new)




module.exports = router;
