const express = require('express');
const session = require('express-session');
const path = require('path');
const routes = require('./routes');
const app = express();
var favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.set('views', path.join(__dirname, 'start'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(session({
    name: 'session',
    secret: 'my_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600 * 1000, // 1hr
    }
}));

app.use(express.static(path.join(__dirname, 'css')));
app.use(routes);

app.use((err, req, res, next) => {
    // console.log(err);
    return res.send('Internal Server Error');
});

app.listen(3000, () => console.log('Server is running on a port 3000'));
