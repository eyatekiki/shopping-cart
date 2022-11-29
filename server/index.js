const express = require ('express');
const cors = require('cors');
const router =require('./routes/accessories')
const accessories = require('./models/accessories');
const app = express ();
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(router)









app.listen(PORT,(err)=>{

    err ? console.log("ooops something happened") : console.log("server connected");
})