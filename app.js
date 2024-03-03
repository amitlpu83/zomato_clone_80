const express = require("express");
const mongoose = require("mongoose");

const route = require("./Route/index");

const PORT = 5500;
const HOSTNAME = "localhost";

// Request Management
const app = express();
app.use('/', route);

// DB
const MongoAtlas = "mongodb+srv://admin:RDjBkS9LOJASnaXQ@zomato-clone-80.mpz4sy2.mongodb.net/Zomato-80?retryWrites=true&w=majority&appName=zomato-clone-80";
//const MongoAtlas = "mongodb+srv://user_56:wJ5UZwWR06cCF8d2@cluster0.ujnvih3.mongodb.net/zomato_db77?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MongoAtlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res => {
        app.listen(PORT, HOSTNAME, () => {
            console.log(`Server is running at ${HOSTNAME}: ${PORT}`)
        });
    })
    .catch(err => console.log(err));