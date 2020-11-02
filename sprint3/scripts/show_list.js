const showsList = document.querySelector(".shows-list");

// append array of shows to dom element
function appendShows(concerts, listElem) {
  concerts.forEach(function (show) {
    
    // create <li>
    const showLi = document.createElement("li");
    showLi.classList.add("shows-list__item");
    
    // create <h2> show.date
    const showDate = document.createElement("h2");
    showDate.classList.add("shows-list__date");
    showDate.innerText = show.date;

    // create <p> show.venue
    const showVenue = document.createElement("p");
    showVenue.classList.add("shows-list__venue");
    showVenue.innerText = show.place;
    
    // create <p>  show.location
    const showLocation = document.createElement("p");
    showLocation.classList.add("shows-list__location");
    showLocation.innerText = show.location;

    const showButton = document.createElement("button");
    showButton.innerText = "Buy Tickets";
    
    // append nodes to dom, first append all created elements to the <li>
    showLi.appendChild(showDate);
    showLi.appendChild(showVenue);
    showLi.appendChild(showLocation);
    showLi.appendChild(showButton);
    
    // append created <li> to <ul>
    listElem.appendChild(showLi);
  });
}

// call appendShows function

function loadShowData(){
  axios.get('https://project-1-api.herokuapp.com/showdates?api_key=b739a23b-16c5-4e6a-8913-9051aca486b1')
  .then(function (response) {
    // handle success
    console.log(response);
    appendShows(response.data, showsList);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
loadShowData();


// try to avoid using template string like below
// const showName = 'Stevie Wonder';
//  const htmlTemplate = `
//       <h1>${showName}</h1>
//       <p>hello</p>
//     `;

// showsList.innerHTML = htmlTemplate;