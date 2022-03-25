const Shinobi = require('../models/shinobi')


module.exports ={
    index,
}

function index(req, res) {
    Shinobi.find({}, function(err, shinobis) {
        console.log(shinobis)
        res.render('shinobis/index', {shinobis})
    })
}

