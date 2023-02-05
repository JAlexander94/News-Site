// global variables "queryables" (what we are inetracting with)
//those might need to be moved into scope

const submitBtn = $('#submit');
const clearBtn = $('#clear');
const articlesDiv = $('#articles-div');






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
$('.submit').on('click', function (event) {
    event.preventDefault();
    console.log("button was clicked");

    const searchTermInput = $('#search-term').val().trim();

    const startYearInput = $('#start-year').val().trim();
    const endYearInput = $('#end-year').val().trim();

    const apiKey = "xAc7AHzqlTvLe8Gm4S6EowutaP3xa1m3"

    // queryURL with Maud's key
    const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTermInput}&api-key=${apiKey}`;

    console.log(queryURL)

    // .empty() to remove the content from the selected element
    articlesDiv.empty()

    //Ajax call to retrieve the data from the API
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)

            renderArticles(response);


        })

});


function renderArticles(response) {

    const numberRecordsInput = $('#number-records').val();
    console.log(numberRecordsInput)

    let articleInfo = [];
    console.log(articleInfo)

    for (let i = 0; i <= 10; i++) {
        let title = response.response.docs[i].abstract
        console.log(title)
        articleInfo.push(title)

        let articleDiv = $("<div>")
        let articleTitle =$("<h1>").text(title)

        $("#articles-div").append(articleDiv);
        articleDiv.append(articleTitle)


    }
    console.log(response)
    console.log(articleInfo);


}

// function to clear the page when clicking the clear button