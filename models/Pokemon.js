const mongoose = require('mongoose');

const pokeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'No name found'],
    },
    imageUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.models.Pokemon|| mongoose.model('Pokemon', pokeSchema);