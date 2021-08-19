const express = require('express');
const app = express();
const router = require('./routes/routes');
var Sequelize = require('sequelize');
const port= process.env.PORT ||3000;

app.use(express.json());
app.use('/api',router); 

 // parse requests of content-type - application/json

// Listning to PORT
app.listen(port,function () {
    console.log(`REST api is running on port ${port}`);
});
