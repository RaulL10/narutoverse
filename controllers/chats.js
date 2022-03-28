const Shinobi = require('../models/shinobi')

module.exports = {
    create,
}

function create(req, res) {
    Shinobi.findById(req.params.id, function(err, shinobi) {
        console.log(req.user)
        req.body.user = req.user._id
        req.body.username = req.user.name
        req.body.userAvatar = req.user.avatar
        shinobi.chats.push(req.body)
        shinobi.save(function(err) {
            res.redirect(`/shinobis/${shinobi._id}`)
        })

    })
}