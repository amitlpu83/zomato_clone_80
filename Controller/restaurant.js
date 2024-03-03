const Restaurant = require("../Model/restaurantDB");

exports.getRestaurant = (req, res) => {
    
    Restaurant.find()
        .then(response => {
            res.status(200).json({
                message: "Restaurant Fetched Successfully",
                restaurant: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getRestaurantByLocationId = (req, res) => {

    const { locId } = req.params;
    
    Restaurant.find({ city: locId }, {})
        .then(response => {
            res.status(200).json({
                message: "Restaurant By Location Id Fetched Successfully",
                restaurants: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}