var express = require('express');
var env = require('dotenv').config()
var ejs = require('ejs');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// mongoose.connect('mongodb+srv://Nitesh:mayday@9501@ecommerceweb.efse8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err) => {
//     if (err) {
//         console.log('mongo connection error: ', err)
//     } else {
//         console.log('mongodb connected')
//     }
// })

var db = mongoose.connection;
db.on('error', (err) => {
    console.log("error: ", err.message);
});
db.once('open', function() {
    console.log('mongo connection error')
});

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('Server is started on http://127.0.0.1:' + PORT);
});