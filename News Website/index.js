console.log("JS file loaded!")

let apiKey = "9e7787ba3901475ab7f1c5d2937f9d65"
let source = "bbc-news"
let urlForHeadlines = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;
let urlForCountryNews = `http://newsapi.org/v2/top-headlines?country=us&apiKey=9e7787ba3901475ab7f1c5d2937f9d65`;

let newsAccordion = document.getElementById("newsAccordion");

let newsHtml = "";
let newsIndex = 0;

var req = new Request(urlForCountryNews);
fetch(req)
    // .then(response => response.json)
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then((data) => {
        console.log(data)
        let { articles } = data
        for (artiNum in articles) {
            console.log(articles[artiNum])
            newsIndex++;
            let news = `
                        <div class="card">
                            <div class="card-header" id="heading${newsIndex}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${newsIndex}"
                                aria-expanded="false" aria-controls="collapse${newsIndex}">
                                <b></b> ${articles[artiNum].title}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${newsIndex}" class="collapse" aria-labelledby="heading${newsIndex}" data-parent="#newsAccordion">
                                <div class="card-body"> ${articles[artiNum].description} <a href="${articles[artiNum].url}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>
                        `
          
            newsHtml += news
            newsAccordion.innerHTML = newsHtml;
        }
    })
    .catch(function (error) {
        console.log("Something went wrong :" + error)
    })






