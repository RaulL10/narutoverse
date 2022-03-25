var express = require('express');
var router = express.Router();
const shinobisCtrl = require('../controllers/shinobis')



/* GET users listing. */
router.get('/', shinobisCtrl.index)




module.exports = router;
