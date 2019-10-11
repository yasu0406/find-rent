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

if (process.env.NODE_ENV === 'production') {
    const path = require('path')
    // Serve static files from the React frontend app
    app.use(express.static(path.join(__dirname, 'client/build')))
    // Anything that doesn't match the above, send back index.html
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'))
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);