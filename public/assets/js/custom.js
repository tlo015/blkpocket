$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7975737542',
        limit: 6,
        resolution: 'thumbnail',
        accessToken: '7975737542.1677ed0.e560784dc2c94e3c9dde9a2b187c8e8e',
        sortBy: 'most-recent',
        template: '<div class="col-lg-2 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});