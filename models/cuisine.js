const mongoose = require('mongoose');

const CuisineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        dropDups: true,
        set: value => value.trim().replace(/\s+/g, " "),
        validate: [
          {
            validator: async function (value) {
              const count = await this.model('Cuisine')
              .countDocuments({ name: value });
    
              return !count;
            },
            message: props => `${props.value} exists. Please try a different genre name.`
          }
        ]
      }
}, {
    timestamps: true
});

CuisineSchema.methods.getDishes = async function () {
    return await mongoose.model('Dish').find({
        cuisine: this._id
    });
}

module.exports = mongoose.model('Cuisine', CuisineSchema);