const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cors = require('cors');
bodyParser = require('body-parser');
require('./modals/roomModal');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

require('./routes/roomsRoute')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.static(__dirname, 'client/build')));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });