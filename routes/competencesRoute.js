const express = require('express')
const router = express.Router()
const competenceModel= require('../models/competenceModels')

router.get('/competence', async (req,res) => {
const competences = await competenceModel.find()
    res.json(competences)
})

router.post('/competence', async (req,res) => {
    const competence = req.body
   const newCompetence = await competenceModel.create(competence)
   res.json(newCompetence)
})
router.delete('/competence/:id', async (req,res) =>{
    const {id} = req.params
    // const competence = await competenceModel.findById(id)

   const skillDelete =  await competenceModel.findByIdAndDelete(id)
    res.json({message: `la competence  a été supprimée`})
})
module.exports = router