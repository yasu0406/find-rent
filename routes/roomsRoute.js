const mongoose = require('mongoose');
const Room = mongoose.model('rooms');

module.exports = app => {

    app.get('/api/get', (request, response) => {
      Room.find({}, (err, rooms) => {
        try {
          rooms.sort((a,b) => {
            return (a.atDate < b.atDate ? 1 : -1);
          });
          response.status(200).send(rooms);
        } catch(err) {
          response.status(500).send();
          console.log(err.message);
        }
      });
    });

    app.post('/api/get-detail/:id', (request, response) => {
      Room.find({'_id': request.body.roomID}, (err, room) => {
        try {
          response.status(200).send(room);
        } catch(err) {
          response.status(500).send();
          console.log(err.message);
        }
      });
    });

    app.post('/api/post', (request, response) => {
      const {title, area, street, describe, price, available, houseType, roomSize, roomType, bath, availableSmoke, landry, parking, img1, img2, img3, img4, img5, userInfo, amenities} = request.body.roomInfo;
      const {userId, userName, userEmail, userPhoto} = userInfo;
      const {wifi, water, pet, gym} = amenities;
      const url = title;
      url.replace(/\s+/g, "");
      let strDate = available;
      let availableDate = strDate.split('T');
      const room = new Room({
        atDate: new Date(),
        title,
        area,
        street,
        describe,
        price,
        available:availableDate[0],
        houseType,
        roomSize,
        roomType,
        bath,
        availableSmoke,
        landry,
        parking,
        img1,
        img2,
        img3,
        img4,
        img5,
        userInfo: {
          userId,
          userName,
          userEmail,
          userPhoto
        },
        amenities: {  
          wifi,
          water,
          pet,
          gym
      }
      });
      try{
        room.save();
        response.status(200).send();
        } catch(err) {
            response.status(500).send();
        } 
      });

}