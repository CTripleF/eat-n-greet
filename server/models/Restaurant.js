const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const restaurantSchema = new Schema({
    restaurantId: {
        type: String,
        required: true,
    },
    // image: {
    //     type: String,
    // },
    // link: {
    //     type: String,
    // },
    language: {
        type: String,
    },
    limit: {
        type: String,
    },
    location_id: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
    },

});

module.exports = restaurantSchema;