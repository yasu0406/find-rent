const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
bodyParser = require('body-parser');
require('./modals/roomModal');

mongoose.connect(keys.mongoURI, {
    useMongoClient: true,
    autoReconnect: false,
    keepAlive: false,
    connectTimeoutMS: 600000,
    socketTimeoutMS: 600000
}, (err) => {
    console.log(err.message);
});

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

require('./routes/roomsRoute')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
