const Shinobi = require('../models/shinobi')

module.exports = {
    create,
    delete: deleteChat
}

function create(req, res) {
    Shinobi.findById(req.params.id, function(err, shinobi) {
        console.log(req.user)
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar
        shinobi.chats.push(req.body)
        shinobi.save(function(err) {
            res.redirect(`/shinobis/${shinobi._id}`)
        })

    })
}

function deleteChat(req, res, next) {
    Shinobi.findOne({ 'chats._id': req.params.id})
    .then(function(shinobi) {
        console.log(req.params.id)
        const chat = shinobi.chats.id(req.params.id)
        console.log(chat)
        if (!chat.user.equals(req.user._id))
        return res.redirect(`/shinobis/${shinobi._id}`)
        chat.remove()
        shinobi.save()
        .then(function() {
            res.redirect(`/shinobis/${shinobi._id}`)
        }).catch(function(err) {
            return next(err)
        })
    })
}