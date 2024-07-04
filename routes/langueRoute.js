const express = require('express')
const router = express.Router()
const langueModel = require('../models/langueModels')


router.get('/langue', async(req,res) =>{
const langue = await langueModel.find()
res.json(langue)
})

router.post('/langue', async (req,res) =>{
    const langue = req.body
    const newLangue = await langueModel.create(langue)
    res.json(newLangue)
})
router.delete('/langue/:id',async (req,res) =>{
    const {id} = req.params
   const langue =  await langueModel.findByIdAndDelete(id)
    res.json(langue)
})

module.exports = router