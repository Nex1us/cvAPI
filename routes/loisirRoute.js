const express = require('express')
const router = express.Router()
const loisirModel = require('../models/loisirModels')



router.get('/loisir', async (req,res) => {
    const loisirs = await loisirModel.find()
    res.json(loisirs)
})

router.post('/loisir', async (req,res) =>{
    const loisir = req.body
    const newLoisir = await loisirModel.create(loisir)
    res.json(newLoisir)
})

router.delete('/loisir/:id', async(req,res) => {
    const {id} = req.params
    const supp = await loisirModel.findByIdAndDelete(id)
    res.json(supp)
})


module.exports = router