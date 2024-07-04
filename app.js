require('dotenv').config()
const cors = require('cors')
const express = require('express')
const contactRoute = require('./routes/contactRoute')
const competenceRoute = require('./routes/competencesRoute')
const loisirRoute = require('./routes/loisirRoute')
const langueRoute = require('./routes/langueRoute')
const mongoose = require('mongoose')
const formationRoute = require('./routes/formationRoute')


const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(contactRoute)
app.use(competenceRoute)
app.use(loisirRoute)
app.use(langueRoute)
app.use(formationRoute)



mongoose.connect(process.env.DB)
.then(() =>  {
    console.log("la connexion est sécurisée");
})

.catch((error) => {
    console.log(error);
})

app.listen(PORT, () => {
    console.log(`le serveur tourne sur le port ${PORT}`);
})



