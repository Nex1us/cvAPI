const mongoose = require('mongoose')
const loisirSchema = mongoose.Schema({
    loisir:String
})

const Loisir = mongoose.model('Loisir', loisirSchema)
module.exports = Loisir