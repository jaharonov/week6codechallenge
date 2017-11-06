var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingSchema = new Schema({ user: String, message: String });
var Message = mongoose.model('Message', listingSchema, 'messages');

router.post('/', function (req, res) {
    console.log(req.body);

    var messageToAdd = new Message(req.body);

    messageToAdd.save(function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

router.get('/', function (req, res) {
    Message.find({}, function (err, foundMessages) {
        if (err) {
            console.log('error:', err);
            res.sendStatus(500);
        } else {
            res.send(foundMessages);
            console.log(foundMessages);
        }
    });
});

module.exports = router;