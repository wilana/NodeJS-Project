const Dish = require('../models/dish');

exports.index = async (request, response, next) => {
    try {
        const dishes = await Dish.find().populate('cuisines');

        response.status(200).json(dishes);
    } catch (error) {
        next(error);
    }
};

exports.show = async (request, response, next) => {
    try {
        const { id } = request.params;

        const dish = await Dish.findById(id).populate('cuisines');

        response.status(200).json(dish);
    } catch (error) {
        next(error);
    }
};

exports.create = async (request, response, next) => {
    try {
        const {
            name,
            mainIngredient,
            cookingTime,
            cuisine
        } = request.body;

        const dish = await Dish.create({
            name,
            mainIngredient,
            cookingTime,
            cuisine
        });

        response.status(200).json({
            message: "Dish was created successfully",
            status: "success",
            dish
        });
    } catch (error) {
        next(error);
    }
};

exports.update = async (request, response, next) => {
    try {
        const {
            name,
            mainIngredient,
            cookingTime,
            cuisine
        } = request.body;

        await Dish.findOneAndUpdate({_id: id}, {
                name,
                mainIngredient,
                cookingTime,
                cuisine
        });

        const dish = await Dish.findById(id);

        response.status(200).json({
            message: "Dish was updated successfully",
            status: "success",
            dish
        });
    } catch (error) {
        next(error);
    }
};

exports.destroy = async (request, response, next) => {
    try {
        const { id } = request.body;

        await Dish.findOneAndDelete({_id: id});

        response.status(200).json({
            message: "Dish was deleted successfully",
            status: "success"
        });
    } catch (error) {
        next(error);
    }
};