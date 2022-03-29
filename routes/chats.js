const express = require('express')
const router = express.Router()
const chatsCtrl = require('../controllers/chats')
const isLoggedIn = require('../config/auth');


router.post('/shinobis/:id/chats', isLoggedIn, chatsCtrl.create)
router.delete('/chats/:id', isLoggedIn, chatsCtrl.delete)


module.exports = router;