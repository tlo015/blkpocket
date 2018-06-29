//const CLOUDINARY= require('cloudinary');
var cloudinary = require("./cloudImage.js") 

cloudinary.uploader.upload("my_picture.jpg", function(result) { 
    console.log(result) 
  });