const mongoose = require('mongoose');

const youtubeSchema = new mongoose.Schema({
    embedURL: String
});

const Youtube = mongoose.model('Youtube', youtubeSchema);

module.exports = Youtube;
