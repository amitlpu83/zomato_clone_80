const express = require('express');

const locationController = require("../Controller/location");
const restaurantController = require("../Controller/restaurant");
const mealtypeController = require("../Controller/mealtype");
const userController = require("../Controller/user");
const menuController = require("../Controller/menu");

const route = express.Router();

route.get('/location', locationController.getLocation);
route.get('/restaurant', restaurantController.getRestaurant);
route.get('/rest/:locId', restaurantController.getRestaurantByLocationId);
route.get('/restaurants/:id', restaurantController.getRestaurantById);
route.get('/mealtype', mealtypeController.getMealtype);
route.post('/sighnup', userController.postSignUp);
route.post('/login', userController.postlogin);
route.get('/menu/:resId', menuController.getMenuByRestaurantId);

module.exports = route;