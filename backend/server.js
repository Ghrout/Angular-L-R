const express = require('express');
const app = express();
const mongoose = require('mongoose');
var routes = require('./route/routes')
const cors = require('cors');
// Desactiva el modo estricto para consultas
mongoose.set('strictQuery', false);

app.use(cors(
    {
        origin:" http://localhost:4200"
    }
))
// Inicia el servidor en el puerto 9002
app.listen(9002, function check(err) {
    if (err) {
        console.log("Error");
    } else {
        console.log("Started");
    }
});

// Conexión a la base de datos usando async/await
async function connectToDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/petpal");
        console.log("Successfully Connected to DB");
    } catch (error) {
        console.log("Error Connecting to DB", error);
    }
}

connectToDB();
app.use(express.json());
app.use(routes);