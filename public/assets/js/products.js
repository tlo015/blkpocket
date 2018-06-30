$(document).ready(function() {

    $(".additional-img").on("click", function() {
    var clickId = $(this).attr('id');
    var clickSrc = $(this).attr('src')
    console.log("clickID: ", clickId)
    console.log("clickSrc: ", clickSrc)

    $("#hero-img").attr('src', clickSrc)
    });

    //DISPLAYING A SINGLE PRODUCT ON PRODUCT HTML

    $(".showProduct").on("click", function() {
        $.ajax({
            type: "GET",
            url: "/product/product/:id"
        })
    })
    // var url = window.location.search;
    // var productId;

    // // If we have this section in our url, we pull out the post id from the url
    // // In localhost:8080/cms?post_id=1, productId is 1
    // if (url.indexOf("?product_id=") !== -1) {
    //     productId = url.split("=")[1];
    //     getPostData(productId);
    // }

    // function getPostData(id) {
    //     $.get("/product/product" + id, function(data) {
    //       res.render ("product/product")
    //     });
    //   }

    

    //$(".showProduct").on("click", showPro);

    // function getPro () {
    //     $.get("product/product", function(data){
    //         product = data;
    //     })
    // }
    
    // function showPro(event) {
    //     var id = $(this).data("id");
    //     $.ajax({
    //         method:"GET",
    //         url: "product/product/"+id
    //     }).then(getPro);
    // }
    // function showPro() {
    //     var currentPro = $(this)
    //     .parent()
    //     .parent()
    //     .data("post");
    //     window.location.href = "/product/product?product_id=" + currentPro.id;



});

