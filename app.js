const fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');


const app = express();

//view engine
app.engine('.hbs',expressHbs({defaultLayout :'layout',extname:'.hbs'}))
app.set('view engine', '.hbs');


app.use(express.urlencoded({ extended :false}));

app.use('/', require('./routes/index'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started  on ${PORT}`));