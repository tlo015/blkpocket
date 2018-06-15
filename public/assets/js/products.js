$(document).ready(function() {
    $(".additional-img").on("click", function() {
    var clickId = $(this).attr('id');
    var clickSrc = $(this).attr('src')
    console.log("clickID: ", clickId)
    console.log("clickSrc: ", clickSrc)

    $("#hero-img").attr('src', clickSrc)
    });
});