// queryURL with Maud's key
let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=xAc7AHzqlTvLe8Gm4S6EowutaP3xa1m3";

// event listener
$('.submit').on('click', function(event){
    event.preventDefault();
    console.log("button was clicked");

    let inputText =$('#search-term').val().trim();


});
    //Ajax call to retrieve the data
//console.log the relevant fields
$.ajax({
    url: queryURL,
    method: "GET"
    .then(function(response){
    console.log(response)
    })

});