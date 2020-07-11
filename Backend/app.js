const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const sellersRoute = require('./routes/sellers');
const requestedbuyersRoute = require('./routes/listofrequestedbuyers');
const bookedbuyersRoute= require('./routes/listofbookedbuyers');
const rejectedbuyersRoute= require('./routes/listofrejectedbuyers');
const requestedsellersRoute = require('./routes/listofrequestedsellers');
const bookedsellersRoute= require('./routes/listofbookedsellers');
const rejectedsellersRoute= require('./routes/listofrejectedsellers');
const buyersRoute = require('./routes/buyers');
var cors = require('cors');
require ('dotenv/config');

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});
app.use(bodyParser.json());

app.use('/sellers',sellersRoute);
app.use('/sellers/listofrequestedbuyers', requestedbuyersRoute);
app.use('/sellers/listofbookedbuyers', bookedbuyersRoute);
app.use('/sellers/listofrejectedbuyers', rejectedbuyersRoute);
app.use('/buyers/listofrequestedsellers', requestedsellersRoute);
app.use('/buyers/listofbookedsellers', bookedsellersRoute);
app.use('/buyers/listofrejectedsellers', rejectedsellersRoute);
app.use('/buyers',buyersRoute);

app.get('/',(req,res) =>{

    res.send('we are on home');

});
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser : true },
    ()=> console.log("Connected To DB")

);
  
app.listen(3010);