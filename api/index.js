const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');

const constant = require('./constants');
const apiRoutes = require('./routes/api');

const app = express();
app.use(helmet());  //  Express Security

app.use(logger('dev'));   //  Morgan logging for dev environment
app.use(bodyParser.json());   //  Parser for HTTP data

app.use(compression());   //  Compress all routes

app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'public')));    //  Serve static files from public

app.use('/api', apiRoutes );

app.listen(constant.PORT, ()=>{
  console.log(`Example app listening on port ${constant.PORT}!`);
});

module.exports = app;