const mongoose = require('mongoose')
const formationSchema = mongoose.Schema({
    year:String,
    location:String,
    experience:String
})
const Formation = mongoose.model('Formation',formationSchema)
module.exports = Formation