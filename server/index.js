const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require ('dotenv');
const userRoute = require('./routes/route');
const cors = require ('cors')
const bodyParser = require ('body-parser');
const path = require('path');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

dotenv.config();

//Activate bodyparser in our app
app.use(express.json());

app.use('/api', userRoute);



mongoose
    .connect(process.env.MONGO_URL)
    .then( ()=> console.log("DBConnection is Successful"))
    .catch((error)=>
         {console.log(error)
    });
    
    app.listen(process.env.PORT || 7000, ()=>{
        console.log("Backend Server is running");
    })





