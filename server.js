const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
bodyParser = require('body-parser');
require('./modals/roomModal');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

require('./routes/roomsRoute')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);