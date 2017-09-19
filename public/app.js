

$("#article-container").on("click", function () {
    //ask the back end for json with all articles from the scrapedData collection
    //hide the opening text 
    $("#noArticles").hide();
    $.getJSON("/", function (data) {
        console.log(data);
    });
});
// When user clicks the scrape button, display the table sorted by name
$("#scrape-new").on("click", function () {

 // Grab the articles as a json
    $.getJSON("/articles", function(data) {
      // For each one
      for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
      }
      console.log("Articles are scraped");

    });

});

$(".btn-info").on("click", function () {
    // Save the id from artcle picked
    var thisId = $(this).attr("data_id");
    console.log("butgton click");
    console.log(thisId);
    // Empty the notes from the note section
    $("#previousNote").empty();
    $("#currentArticleTitle").empty();
    // Now make an ajax call for the Artsicle
    $.ajax({
        method: "GET",
        url: "/articles/" + thisId
        
    }).done(function (data) {
        console.log(data);
    //get article title in model     
        $("#currentArticleTitle").append("<h4 class='modal-title'>" + data.title + "</h4>");
        
    //loop to dispaly the notes in the model    
        for (var i = 1; i < data.comment.length; i++){ 
    }   
    });
})