const CLOUDINARY= require('cloudinary');

//this will connect cloudinary api and upload images

CLOUDINARY.config({ 
    cloud_name: 'sample', 
    api_key: '822758326174127', 
    api_secret: 'MlkiIBKX-fAIiS7N4EpOyQg_2-g' 
  });

 module.exports = CLOUDINARY;
  
  