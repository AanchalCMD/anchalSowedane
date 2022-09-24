const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config()


const ejs = require('ejs');   

const expressLayout = require('express-ejs-layouts'); 


const flash = require('express-flash'); 

const passport = require('passport')


// Paths
const views_path = path.join(__dirname + '/resources/views');

// Importing Database logic
require('./app/start/db')();


// Importing Session Config
require('./app/config/session')(app);

 


// Passport Config
// require('./app/config/passport')(passport);
// const { initLocal} = require('./app/config/passport');
// initLocal(passport);

app.use(passport.initialize());
app.use(passport.session())   // passport works with the help of session

// Flash
app.use(flash());


// Global Middleware
app.use((req, res, next) => {
    res.locals.session = req.session;
    res.locals.user = req.user;
    // console.log(res.locals)
    next();
});



// Setting Template Engine
app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('views', views_path);

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// Web Routes
require('./routes/web.js')(app);


// Listening on port
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});





// mongoimport --db pizza --collection menus --file menu.json --jsonArray