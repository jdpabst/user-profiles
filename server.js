const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config.js')
const profileCtrl = require('./controllers/profileCtrl');
const userCtrl = require('./controllers/userCtrl');


const app = express();


// serving our front end files through here using express-static
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions))
app.use(session({ 
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: false

 }))



var corsOptions = {
    origin: 'https://localhost:3000',
}

app.get('/api/profiles', profileCtrl.getFriendsProfiles)

app.post('/api/login', userCtrl.login)


app.listen(3000, function(){
    console.log('listening on port 3000')
})