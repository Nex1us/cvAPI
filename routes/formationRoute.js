const express = require('express')
const router = express.Router()
const formationModel = require('../models/formationModels')


router.get('/formation', async (req,res) => {
const formation = await formationModel.find()
res.json(formation)
})

router.post('/formation', async (req,res) =>{
    const formation = req.body
    const newFormation = await formationModel.create(formation)
    res.json(newFormation)
})

router.delete('/formation/:id', async (req,res) =>{
    const {id} = req.params
    const delFormation = await formationModel.findByIdAndDelete(id)
    res.json(delFormation)
})

module.exports = router