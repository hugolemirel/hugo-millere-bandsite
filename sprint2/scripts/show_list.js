const concertsArr = [ // creates array of objects for concerts
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
  

  function appendShows(concerts, listElem) {  // appends array of shows to dom element
    concerts.forEach(function (show) {
      
      
      const showLi = document.createElement("li");        // creates <li>
      showLi.classList.add("shows-list__item");
      
      const showDate = document.createElement("h2");      // creates <h2> show.date
      showDate.classList.add("shows-list__date");
      showDate.innerText = show.date;
  
      const showVenue = document.createElement("p");     // creates <p> show.venue
      showVenue.classList.add("shows-list__venue"); 
      showVenue.innerText = show.venue;

      const showLocation = document.createElement("p");  // creates <p> show.location
      showLocation.classList.add("shows-list__location");
      showLocation.innerText = show.location;
  
      const showButton = document.createElement("button");  // creates <p> show.location
      showButton.innerText = "Buy Tickets";
      
      // appends nodes to dom, first append all created elements to the <li>
      showLi.appendChild(showDate);
      showLi.appendChild(showVenue);
      showLi.appendChild(showLocation);
      showLi.appendChild(showButton);

      listElem.appendChild(showLi);       // appends created <li> to <ul>
    });
  }
 
  appendShows(concertsArr, showsList);   // call appendShows function
  