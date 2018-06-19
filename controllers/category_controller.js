exports.index= function(req, res) {
    res.render("category/category");
   
};

// exports.page = function(req, res) {
//     // depending on page, execute proper query and return results
//     // pass results to handlebars file to render
//     // depending on subcategory, partial is rendered
//     // res.render sends a view template 
//     // look up jquery change path

//     // res.render("req.params.page", {
//     //     whichPartial: function() {
//     //         return ("newin")
//     //     }
//     // })
    
//     // $("a").on("click", function(){
//     //     var userClick = $(this).attr('id')
    
//     //     if (userClick === "cat-new-in") {
//     //         $("#partialLoad").text( "newin" );
            
//     //     }
//     // })
    

// }