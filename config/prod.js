// prod.js - production keys here !!
// dev.js - don't commit this!!
module.exports = {
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};