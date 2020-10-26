const concertsArr = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Fancisco, CA"
  },
  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Fancisco, CA"
  },
    {
    date: "Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Fancisco, CA"
  },
    {
    date: "Sat Aug 12 2019",
    venue: "Whoknows",
    location: "San Fancisco, CA"
  },
    {
    date: "Whatever",
    venue: "Hyatt Agency",
    location: "San Fancisco, CA"
  },
    {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Fancisco, CA"
  }
];

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
    showVenue.innerText = show.venue;
    
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
appendShows(concertsArr, showsList);

// try to avoid using template string like below
// const showName = 'Stevie Wonder';
//  const htmlTemplate = `
//       <h1>${showName}</h1>
//       <p>hello</p>
//     `;

// showsList.innerHTML = htmlTemplate;