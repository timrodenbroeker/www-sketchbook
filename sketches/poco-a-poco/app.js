let counter = 0;
let selector = counter;
let theData;
let app; 

function start(d) {
    theData = d;
    app = document.getElementById("app");

}

function loadImage() { 
    selector = counter % theData.length;
    let el = theData[selector];
    console.log(el);
    let app = document.getElementById("app");
    app.innerHTML += `<div class="item"><img src="${el.url}"><p>${el.title}</p></div>`;
    counter++;
}


// Replace 'your_api_url_here' with the actual URL of the JSON resource you want to fetch
const apiUrl = 'data.json';

// Fetch the JSON data
fetch(apiUrl)
  .then(response => {
    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`Network response was not ok, status code: ${response.status}`);
    }
    // Parse the JSON data from the response
    return response.json();
  })
  .then(data => {
    // Use the JSON data here


    start(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });