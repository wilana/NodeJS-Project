const mongoose = require('mongoose');

const DishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mainIngredient: {
        type: String
    },
    // could be minutes, hours or days...
    cookingTime: {
        type: String
    },
    cuisine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cuisine'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Dish', DishSchema);