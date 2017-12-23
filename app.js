const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');



const app = express();


app.use(logger('dev'));
app.use(bodyParser());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/api", (req, res) => {
    res.json({username:"accimeesterlin"});
});

app.listen(3001, () => {
    console.log("App is starting at port ", 3001);
});



