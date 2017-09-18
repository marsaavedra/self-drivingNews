$.getJSON("/all", function (data) {
    // Call our function to generate a table body
    if (data != 0) {
        $("#noArticles").hide();
        //displayScrapedArticles(data);
        console.log(data);
    }
});

$("#article-container").on("click", function () {
    //ask the back end for json with all articles from the scrapedData collection
    //hide the opening text 
    $("#noArticles").hide();
    $.getJSON("/", function (data) {
        console.log(data);
    });
});
// When user clicks the scrape button, display the table sorted by name
$(".scrape-new").on("click", function () {
    //clearing out the table of old articles
    /*no long need this because handlebars take are of this problem.If was using a for loop to loop though our data then we will need it.*/
    //$(".card-deck").empty();
    // Do an api call to the back end for json will scrape the data from the webpage 
    $.getJSON("/scrape", function () {
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