const express = require('express');
const path = require('path');
var session = require('express-session');

const app = express();

app.use(session({secret: 'kartikeycr7',resave: false, saveUninitialized: false }))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/wishlist', express.static(path.join(__dirname, 'public'))) // at the time of deletion only!! Else  have used routerLink
app.use('/signin', express.static(path.join(__dirname, 'public'))) // For false entries
app.use('/listing/add', express.static(path.join(__dirname, 'public'))) // For adding lists and clearing form
app.use('/listing', express.static(path.join(__dirname, 'public'))) // For logo to refresh page. (Default)


app.use('/uploads', express.static('uploads')) // For pictures
app.use('/api', require('./routes/api')) //Backend routes

app.set('port',process.env.PORT || 7000)
app.listen(app.get('port'),function(){
    console.log('Server started at http://localhost:7000')
})

//app.listen(7000, () => console.log('Server started at http://localhost:7000'));
