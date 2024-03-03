const User = require('../Model/userDB')

exports.postSignUp = (req, res) => {
    const { email, password, name } = req.body;

    const userObj = new User ({
        email,
        password,
        name
    });

    userObj.save()
        .then(response => {
            res.status(200).json({
                message: "User Details Saved Successfully",
                signup: response
            })
        })
        .catch( err => {
            res.status(500).json({ error: err })
        })
}