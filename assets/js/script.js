// global variables "queryables" (what we are inetracting with)
const searchTermInput =$('#search-term').val().trim();
const numberRecordsInput =$('#number-records').val();
const startYearInput =$('#start-year').val().trim();
const endYearInput =$('#end-year').val().trim();
const submitBtn =$('#submit');
const clearBtn =$('#clear');
const articlesDiv =$('#articles-div');

// queryURL with Maud's key
let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=xAc7AHzqlTvLe8Gm4S6EowutaP3xa1m3";

// ? function to use input fields to search the API or do we need to add the search paramter to teh query url

// function to create new divs for the response renderArticles
    // forEach loop for the number of records to display
        //create a new elements with
            // <h2> Title, add text (from the object)
            // <h3> Author, add text (from the object)
            // <p> URL link, add text (from the object)
        // append all to the <div>
        // append to the .container 


// function to get the data from the API
    // event listener for the submit button
    $('.submit').on('click', function(event){
        event.preventDefault();
        console.log("button was clicked");
});
    // .empty() to remove the content from the selected element

    //Ajax call to retrieve the data from the API
    $.ajax({
    url: queryURL,
    method: "GET"
    .then(function(response){
    console.log(response)

   //call the renderArticles function
    })

});

// function to clear the page when clicking the clear button