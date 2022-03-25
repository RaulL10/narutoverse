var express = require('express');
var router = express.Router();
const shinobisCtrl = require('../controllers/shinobis')



/* GET users listing. */
router.get('/', shinobisCtrl.index)
router.get('/new', shinobisCtrl.new)
router.get('/:id', shinobisCtrl.show)
router.post('/', shinobisCtrl.create)


module.exports = router;
