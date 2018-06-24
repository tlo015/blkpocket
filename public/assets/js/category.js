$(document).ready(function() {
var enterCategory = $("#category_name");
var newSku = $("#sku");
var newProductName = $("#product_name");
var newDescription = $("#description");
var newPrice = $("#regular_price");
var newQuantity = $("#quantity");
var newImage = $("#uploaded_image");

var url = window.location.search;
var productID;
var updating = false;

//**** 
//CHANGE WHEN DEPLOY TO HEROKU !!!
//***** 
function submitNewProduct(category, bleh) {
    // console.log ($)
    console.log('about to send this bad boy', category);
    $.post("admin/newProduct", category, function() {
        window.location.href="/admin"
    });
}

// function updateProduct(category) {
//     $.ajax({
//       method: "PUT",
//       url: "/admin",
//       data: user
//     })
//     .done(function() {
//       window.location.href = "/admin";
//     });
//   };

// Wont submit the post if we are missing any data
function insertProduct (event) {
    console.log('======>');
    // submitNewProduct('banana');
    event.preventDefault();


    if (!enterCategory.val().trim() || !newSku.val().trim() || !newProductName.val() ||!newDescription.val().trim() || !newPrice.val().trim() || !newQuantity.val().trim() || !newImage.val().trim()) {
        return;
        }

    var newProduct = {
        category_name: enterCategory.val().trim(),
        sku: newSku.val().trim(),
        product_name: newProductName.val().trim(),
        description: newDescription.val().trim(),
        regular_price: newPrice.val().trim(),
        quantity: newQuantity.val().trim(),
        //image_url: newImage
    };


    submitNewProduct(newProduct);

};


$('#addProductButton').on("click", insertProduct);
console.log("A New Product was added")
});