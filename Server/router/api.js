const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const db = "mongodb+srv://Janvi:ldce2023@cluster0.xknx6.mongodb.net/mystore?retryWrites=true&w=majority";

router.get('/', (req, res) => {
    res.send('from api route');
})


mongoose.connect(db, err => {
    if (err)
        console.log(err);
    else
        console.log("successss");
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        }
        else {
            res.status(200).send(registeredUser);
        }
    })

})

router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({
        email: userData.email
    }, (error, user) => {
        if (error) {
            console.log(error);
        }
        else {
            if (!user) {
                res.status(401).send("invalid Email")
            }
            else if (user.password !== userData.password) {
                res.status(401).send("Invalid Password")
            }
            else {
                res.status(200).send(user)
            }
        }
    })



});

router.get('/events', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto",
            "description": "yeye",
            "date":"2021-04-23T18:25:43.511z"
        },
        {
            "_id": "2",
            "name": "Autos",
            "description": "yeyes",
            "date": "2021-05-23T18:25:43.511z"
        },
        {
            "_id": "3",
            "name": "Autos",
            "description": "yeyes",
            "date": "2021-05-23T18:25:43.511z"
        },
        {
            "_id": "4",
            "name": "Autos",
            "description": "yeyes",
            "date": "2021-05-23T18:25:43.511z"
        },
        {
            "_id": "5",
            "name": "Autos",
            "description": "yeyes",
            "date": "2021-05-23T18:25:43.511z"
        }
    ]
    res.json(events)
})

router.get('/special', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto",
            "description": "yeye",
            "date": "2021-04-23T18:25:43.511z"
        },
        {
            "_id": "2",
            "name": "Autos",
            "description": "yeyes",
            "date": "2021-05-23T18:25:43.511z"
        },
        {
            "_id": "3",
            "name": "Autos",
            "description": "yeyes",
            "date": "2021-05-23T18:25:43.511z"
        },
        {
            "_id": "4",
            "name": "Autos",
            "description": "yeyes",
            "date": "2021-05-23T18:25:43.511z"
        },
        {
            "_id": "5",
            "name": "Autos",
            "description": "yeyes",
            "date": "2021-05-23T18:25:43.511z"
        }
    ]
    res.json(events)
})


module.exports = router;