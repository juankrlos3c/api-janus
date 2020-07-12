const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    id: {
        type: String
    }
});

module.exports = mongoose.model('Book', BookSchema);
