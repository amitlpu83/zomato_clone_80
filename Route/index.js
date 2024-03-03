const express = require('express');

const locationController = require("../Controller/location");
const restaurantController = require("../Controller/restaurant");
const mealtypeController = require("../Controller/mealtype");
const userController = require("../Controller/user");

const route = express.Router();

route.get('/location', locationController.getLocation);
route.get('/restaurant', restaurantController.getRestaurant);
route.get('/rest/:locId', restaurantController.getRestaurantByLocationId);
route.get('/mealtype', mealtypeController.getMealtype);
route.post('/sighnup', userController.postSignUp);

module.exports = route;