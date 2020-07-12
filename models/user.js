const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String
    }
});

module.exports = mongoose.model('User', UserSchema);