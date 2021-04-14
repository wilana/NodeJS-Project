const Cuisine = require('../models/Cuisine');

exports.index = async (request, response, next) => {
    try {
        const cuisines = await Cuisine.find();
        response.status(200)
            .json(cuisines);
    } catch (error) {
        next(error);
    }
};

exports.show = async (request, response, next) => {
    try {
        const { id } = request.params;
        const cuisine = await Cuisine.findById(id);
        const dishes = await cuisine.getDishes();

        response.status(200)
            .json({...cuisine._doc, dishes });

    } catch (error) {
        next(error);
    }
};

exports.create = async (request, response, next) => {
    try {
        const { name } = request.body;
        const cuisine = await Cuisine.create({ name });

        response.status(200)
            .json({ 
                message: "Cuisine was created successfully",
                status: "success",
                cuisine
            });
    } catch (error) {
        next(error);
    }
};

exports.update = async (request, response, next) => {
    try {
        const { id, name } = request.body;
        
        await Cuisine.findOneAndUpdate({_id: id }, { name });
        const cuisine = await Cuisine.findById(id)

        response.status(200)
            .json({
                message: "Cuisine was updated successfully",
                status: "success",
                cuisine
            })
    } catch (error) {
        next(error);
    }
};

exports.destroy = async (request, response, next) => {
    try {
        const { id } = request.body;

        await Cuisine.findOneAndDelete({_id: id});

        response.status(200)
            .json({
                message: "Cuisine was deleted successfully",
                status: "success"
            })
    } catch (error) {
        next(error);
    }
};