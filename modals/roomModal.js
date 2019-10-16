
const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomsSchema = new Schema({
    roomId: String,
    atDate: String,
    title: String,
    area: String,
    street: String,
    postal: String,
    describe: String,
    price: Number,
    available: String,
    houseType: String,
    roomSize: String,
    roomType: String,
    bath: String,
    availableSmoke: Boolean,
    landry: String,
    parking: Boolean,
    userInfo: {
        userId: String,
        userName: String,
        userEmail: String,
        userPhoto: String
    },
    amenities: {
        wifi: Boolean,
        water: Boolean,
        c: Boolean,
        gym: Boolean
    },
    imgUrl: {
        img1: String,
        img2: String,
        img3: String,
        img4: String,
        img5: String
      }
});

mongoose.model('rooms', roomsSchema);