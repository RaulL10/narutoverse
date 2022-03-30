var express = require('express');
var router = express.Router();
const shinobisCtrl = require('../controllers/shinobis')
const isLoggedIn = require('../config/auth');



/* GET users listing. */
router.get('/', shinobisCtrl.index)
router.get('/new', isLoggedIn, shinobisCtrl.new)
router.get('/:id', isLoggedIn, shinobisCtrl.show)
router.post('/', isLoggedIn, shinobisCtrl.create)
router.get('/:id/edit', isLoggedIn, shinobisCtrl.edit);
router.put('/:id', isLoggedIn, shinobisCtrl.update);
 
module.exports = router;
