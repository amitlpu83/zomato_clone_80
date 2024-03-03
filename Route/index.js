const express = require('express');

const locationController = require("../Controller/location");
const restaurantController = require("../Controller/restaurant");

const route = express.Router();

route.get('/location', locationController.getLocation);
route.get('/restaurant', restaurantController.getRestaurant);
route.get('/rest/:locId', restaurantController.getRestaurantByLocationId);

module.exports = route;