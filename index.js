// Author : REYNALDI (reynaldirepo.github.io)


//BackEnd Script
//library for web app
const express = require('express');
const socket = require('socket.io');

// App SETUP
const App = express();
let server = App.listen(4000, function(){
    console.log("Listening To Port 4000")
    }
);

//Static File
//lOAD view
App.use(express.static('public'));

//Socket Setup
let io = socket(server);
io.on('connection', function(socket){
    //function for user make conection to socket
    console.log("made socket connection", socket.id);
});
