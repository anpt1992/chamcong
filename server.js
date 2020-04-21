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

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));