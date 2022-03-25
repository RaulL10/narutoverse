const Shinobi = require('../models/shinobi')


module.exports ={
    index,
    new: newNinja
}

function index(req, res) {
    Shinobi.find({}, function(err, shinobis) {
        console.log(shinobis)
        res.render('shinobis/index', {shinobis})
    })
}

function newNinja(req, res) {
    res.render('shinobis/new', {title: 'Add Ninja'})
}
