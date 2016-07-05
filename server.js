//http://devmountain.github.io/Siri-client/
var express = require('express');
var app = express();

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that.","Taquitos con freehoeleetoes","No estes fregando morro","Vales pa pura ronha!"];

var getRandomMessage = function (){
    return messages[Math.floor(Math.random() * (messages.length - 0)) + 0];
};
app.get('/', function(req, res) {
    res.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    }).send(JSON.stringify({
        message: getRandomMessage()
    }));
});

app.options('/', function(req, res) {
    res.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    }).send();
});

app.listen(8887, function(){
    console.log('listening on port 8887');
});