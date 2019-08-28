const Express = require('express');
const path = require('path');

var app = new Express();

app.use(Express.static(__dirname+'/dist/LibraryApp-angular'));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/dist'))
});