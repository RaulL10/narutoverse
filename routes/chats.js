const express = require('express')
const router = express.Router()
const chatsCtrl = require('../controllers/chats')


router.post('/shinobis/:id/chats', chatsCtrl.create)
router.delete('/chats/:id', chatsCtrl.delete)


module.exports = router;