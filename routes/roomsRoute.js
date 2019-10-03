const mongoose = require('mongoose');
const Room = mongoose.model('rooms');

module.exports = app => {

    app.get('/api/get', (request, response) => {
      Room.find({}, (err, rooms) => {
        if (err) response.status(500).send()
        else response.status(200).send(rooms)
      })
    })

    app.post('/api/post', (request, response) => {
      const {title, area, describe, price, available, roomSize, roomType, bath, availableSmoke, landry, parking, pet, img1, img2, img3, img4, img5, userInfo} = request.body.roomInfo;
      const {userId, userName, userEmail} = userInfo;



      // var storage = multer.diskStorage({
      //   destination: function (req, img, cb) {
      //     cb(null, 'uploads')
      //   },
      //   filename: function (req, img, cb) {
      //     cb(null, file.fieldname + '-' + Date.now())
      //   }
      // })
       
      // var upload = multer({ storage: storage })

      const room = new Room({
        atDate: new Date(),
        title,
        area,
        describe,
        price,
        available,
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