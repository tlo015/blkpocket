$(document).ready(function() {
var enterCategory = $("#categoryId");
var newSku = $("#sku");
var newProductName = $("#product_name");
var newDescription = $("#description");
var newPrice = $("#regular_price");
var newQuantity = $("#quantity");
var newImage = $("#uploaded_image");
 
var url = window.location.search;
var CategoryId;


function submitNewProduct(product) {
    $.post("admin/newProduct", product, function() {
        window.location.href="/admin/admin"
    });
}

// Submit a post into the database
function insertProduct (event) {
    console.log('======>');
    // submitNewProduct('banana');
    event.preventDefault();

    // Wont submit the post if we are missing any data
    if (!enterCategory.val().trim() || 
        !newSku.val().trim() || 
        !newProductName.val() || 
        !newDescription.val().trim() || 
        !newPrice.val().trim() || 
        !newQuantity.val().trim()
    ) {
        return;
    }

    var newProduct = {
        CategoryID: enterCategory.val().trim(),
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


function createProductDiv (productData) {
    var newDiv = $("<div>")
    newDiv.addClass("col-md-3");
    newDiv.attr("id", "prod");
    newDiv.append("<p>" + productData.product_name + "</p>");
    newDiv.append("<p>" + productData.regular_price + "</p>");

    return newDiv;
}

function showProductDiv () {
    $.get("admin/newProduct", function(data) {
        var divToAdd = [];
        for (var i=0; i<data.length; i++) {
            divToAdd.push(createProductDiv(data[i]));
        }

    })
}
});