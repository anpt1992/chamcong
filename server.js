const express    = require('express');
const bodyParser = require('body-parser');
const passport   = require('passport')
const session    = require('express-session')
const env = require('dotenv');

env.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret 
app.use(passport.initialize()); 
app.use(passport.session()); // persistent login sessions

//Models
var models = require("./models"); 
//Sync Database
// models.sequelize.sync().then(function() { 
//     console.log('Nice! Database looks fine') 
// }).catch(function(err) { 
//     console.log(err, "Something went wrong with the Database Update!") 
// });

var User = models.user;


//load passport strategies 
require('./config/passport/passport.js')(passport, models.user);
 

app.post('/signin', function (req, res) {
    var user_name = req.body.email;
    var password = req.body.password;
    if (user_name == 'admin@gmai' && password == 'admin@gmai') {
        res.send('success');
    }
    else {
        res.send('Failure');
    }
})

app.post('/signup', function (req, res) {
    var user = new User();
 
    user.username = req.body.username;
    user.email = req.body.email;
    user.setPassword(req.body.password);
  
  user.save().then(function(){
    return res.json({user: user.toAuthJSON()});
  }).catch(next);
});


app.listen(port, () => console.log(`Listening on port ${port}`));