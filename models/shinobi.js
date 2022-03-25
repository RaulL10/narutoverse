const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shinobiSchema = new Schema ({
    name: String,
    village: String,

})

module.exports = mongoose.model('Shinobi', shinobiSchema)