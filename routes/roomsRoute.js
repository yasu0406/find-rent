const mongoose = require('mongoose');
const Room = mongoose.model('rooms');

module.exports = app => {

    app.get('/api/get', (request, response) => {
      Room.find({}, (err, rooms) => {
        if (err) response.status(500).send()
        else response.status(200).send(rooms)
      })
    });

    app.post('/api/get-detail/:id', (request, response) => {
      Room.find({'_id': request.body.roomID}, (err, room) => {
        if (err) response.status(500).send()
        else response.status(200).send(room)
      })
    });

    app.post('/api/post', (request, response) => {
      const {title, area, describe, price, available, houseType, roomSize, roomType, bath, availableSmoke, landry, parking, pet, img1, img2, img3, img4, img5, userInfo} = request.body.roomInfo;
      const {userId, userName, userEmail} = userInfo;
      const url = title;
      url.replace(/\s+/g, "");
      const room = new Room({
        atDate: new Date(),
        title,
        area,
        describe,
        price,
        available,
        houseType,
        roomSize,
        roomType,
        bath,
        availableSmoke,
        landry,
        parking,
        pet,
        img1,
        img2,
        img3,
        img4,
        img5,
        userInfo: {
          userId,
          userName,
          userEmail
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