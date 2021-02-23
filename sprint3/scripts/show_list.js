const showsList = document.querySelector(".shows-list"); //Refers the <UL> tag in shows.html

function appendShows(concerts, listElem) {            // appends array of shows to dom element
  concerts.forEach(function (show) {
   
    const showLi = document.createElement("li");      // creates <li>
    showLi.classList.add("shows-list__item");
    
    const showDate = document.createElement("h2");    // creates <h2> show.date
    showDate.classList.add("shows-list__date");
    showDate.innerText = show.date;
   
    const showVenue = document.createElement("p");    // creates <p> show.venue
    showVenue.classList.add("shows-list__venue");
    showVenue.innerText = show.place;
    
    const showLocation = document.createElement("p"); // creates <p>  show.location
    showLocation.classList.add("shows-list__location");
    showLocation.innerText = show.location;

    const showButton = document.createElement("button");
    showButton.innerText = "Buy Tickets";
    
    // appends new nodes to dom, first appends all created elements to the <li>
    showLi.appendChild(showDate);
    showLi.appendChild(showVenue);
    showLi.appendChild(showLocation);
    showLi.appendChild(showButton);
    
    listElem.appendChild(showLi);    // appends created <li> to <ul>
  });
}



function loadShowData(){             // calls appendShows function
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