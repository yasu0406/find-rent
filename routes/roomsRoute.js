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
      const {roomId, title, area, street, describe, price, available, houseType, roomSize, roomType, bath, availableSmoke, landry, parking, userInfo, amenities} = request.body.roomInfo;
      const {userId, userName, userEmail, userPhoto} = userInfo;
      const {wifi, water, pet, gym} = amenities;
      const url = title;
      url.replace(/\s+/g, "");
      let strDate = available;
      let availableDate = strDate.split('T');

      for(let i = 1; i < request.body.arryImage.length; i++) {
        console.log(i);
        if(request.body.arryImage[i].indexOf('img0' + i) > -1) {
          console.log(request.body.arryImage[i]);
        } else if(request.body.arryImage[i].indexOf('img0' + i) > 0) {
          
        }
      }

      const room = new Room({
        atDate: new Date(),
        roomId,
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
        },
        imgUrl: {
          img1: request.body.arryImage[0],
          img2: request.body.arryImage[1],
          img3: request.body.arryImage[2],
          img4: request.body.arryImage[3],
          img5: request.body.arryImage[4]
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