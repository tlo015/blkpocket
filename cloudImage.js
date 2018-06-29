const CLOUDINARY = require('cloudinary');

CLOUDINARY.config({
  cloud_name: 'blkpocket',
  api_key: '822758326174127',
  api_secret: 'MlkiIBKX-fAIiS7N4EpOyQg_2-g'
});



CLOUDINARY.uploader.upload("C:/users/sarah/blkpocket/public/assets/img/dummy3.jpeg",
    function(result){console.log(result)
    });


    cloudinary.image("john_doe_1001.jpg", { alt: "john_doe_1001" })


