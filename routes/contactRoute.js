const express = require('express');
const Contact = require('../models/contactModels');
const router = express.Router()



router.get('/contact', async (req,res) =>{
    const contact = await Contact.find()
    console.log(contact);
    res.json(contact)
})

router.post('/contact', async (req,res) =>{
    const newContact = req.body
    await Contact.deleteOne()
    await Contact.create(newContact)
    res.json(newContact)
})

module.exports = router