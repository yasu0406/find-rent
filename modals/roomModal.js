
const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomsSchema = new Schema({
    atDate: String,
    title: String,
    area: String,
    postal: String,
    describe: String,
    price: Number,
    roomSize: String,
    roomType: String,
    bath: String,
    availableSmoke: Boolean,
    landry: String,
    parking: Boolean,
    pet: Boolean,
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
    userInfo: {
        userId: String,
        userName: String,
        userEmail: String
    }
});

mongoose.model('rooms', roomsSchema);