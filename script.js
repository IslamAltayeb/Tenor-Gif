
// AIzaSyARgoO0PF9DFuh7MYwHl9ShJmUZG9vk7yk
'use strict';

const search = document.getElementById("search");
const searchbtn = document.getElementById("btn");
const output = document.getElementById("output");
let searchValue = "London"

// http request
function getGifs() {
    var getRequest = new XMLHttpRequest();
    getRequest.open("GET", `https://tenor.googleapis.com/v2/search?q=excited&key=AIzaSyC8pMiAmA5GdhM2nwjW-cA7qIeMz1Y68Ww&client_key=API_KEY&limit=12&q=${searchValue}`);
	getRequest.responseType = "json";

    getRequest.send();

    getRequest.onload = function () {
		if (getRequest.status >= 200 && getRequest.status < 300) {
			let gifs = getRequest.response.results;
            output.innerHTML =""
			for (gifs of gifs) {
                let outputCard = document.createElement("div");
                output.appendChild(outputCard);
                outputCard.innerHTML = `<div class="card"> <img src='${gifs.media_formats.gif.url}'></img></div>`
 			}
		} else {
			alert("get request");
		}
	};

}

getGifs()



search.addEventListener("change",(e) => {
    searchValue= e.target.value;
    console.log(searchValue);
});

searchbtn.addEventListener("click", (e) =>{
    e.preventDefault()
    getGifs()
})