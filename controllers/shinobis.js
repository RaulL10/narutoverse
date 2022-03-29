const Shinobi = require('../models/shinobi')


module.exports ={
    index,
    new: newNinja,
    create,
    show,
    edit,
    update
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

function create(req, res) {
    const shinobi = new Shinobi(req.body)
    shinobi.save(function(err) {
        if (err) return res.redirect('/shinobis/new')
        res.redirect(`/shinobis/${shinobi._id}`)
    })
}
function show(req, res) {
    Shinobi.findById(req.params.id, function(err, shinobi) {
        res.render('shinobis/show', {title: `${shinobi.name}`, shinobi})
    })
}
function edit(req, res) {
    const shinobi = {id: req.params.id}
    console.log('HEY')
    res.render('shinobis/edit', {shinobi})
}
function update(req, res) {

}