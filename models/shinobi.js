const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shinobiSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    village: {
        type: String,
        required: true 
    },
    age: {
        type: Number,
        min: 10,
        max: 80,
        required: true
    },
    jutsu: {
        type: String,
        required: true,
    } 
}, {
    timestamps: true
})


const chatSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 10,
        default: 5,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    username: String,
    userAvatar: String,
}, {
    timestamps: true
})
module.exports = mongoose.model('Shinobi', shinobiSchema)
