
const messageForm = document.getElementById("messageForm");   // Gets the comments form
const messageList = document.getElementById("messageList");   // Gets the comments list to be populated
const messageArr = [];                                        // Creates the array 

messageForm.addEventListener("submit", (event) => {   // form submit event
event.preventDefault();                               // prevents page from reloading and form submitting
const name = event.target.name.value;                 // gets the input value by the name attribute 'name'
const message = event.target.message.value;           // gets the input value by the name attribute 'message'

  if (name && message) {   // checks if name and message inputs have a value
    messageArr.push({      // pushes an object to the message array
      name: name,
      message: message,
      timestamp: Date.now()
    });

    renderMessages(messageArr); // calls "renderMessages" function, loops through array & creates DOM elements with new messages added to array above

    event.target.reset();      // reset the form inputs
  } else {
    alert("please enter a name and message");   // if no values are set for the input fields
  }
});

const renderMessages = (messages) => {  // appends elements to the DOM from array of messages
  messageList.innerHTML = "";           // clears <ul> element before appending

  sortByDate(messages);                 // function which sorts the array by timestamp before looping
  
  messages.forEach((message) => {      // loops through messages

    const avatar = document.createElement("img"); // creates avatar img
    avatar.src = 'https://pbs.twimg.com/profile_images/1443771405/tom_400x400.jpg';
    avatar.classList.add('avatar');
    
    const messageLi = document.createElement("li"); // creates <li> as a whole data container

    const avatarCol = document.createElement("div"); // creates left column for avatar
    avatarCol.classList.add('avatar-col');

    const commentCol = document.createElement("div"); // creates right column for name, date & comment
    commentCol.classList.add('comment-col');

    const commentRow1 = document.createElement("div"); // create a first row for name and date of comment
    commentRow1.classList.add('commentIdent');

    const commentRow2 = document.createElement("div"); // create a second row for comment paragraph.
    commentRow2.classList.add('comment');

    const nameElem = document.createElement("h3");  // creates <h3> for name
    nameElem.innerText = message.name;
// (I can add classes to each element with .classList.add();
// nameElem.classList.add('message-form__name') );

    const messageElem = document.createElement("p");  // creates <p> for message
    messageElem.innerText = message.message;

    const messageTimeElem = document.createElement("h4");  // creates <time> element
    messageTimeElem.innerText = new Date(
      message.timestamp
    ).toLocaleDateString();

// !IMPORTANT appends all elements to the "avatarCol", <li>, "commentCol" & "commentRows" before appending to the <ul> 
    avatarCol.appendChild(avatar);        // puts the avatar img in the avatar column
    messageLi.appendChild(avatarCol);     // puts the avatar column in the <Li>
    messageLi.appendChild(commentCol);    // puts the comment column in the <Li>
    commentCol.appendChild(commentRow1);  // puts the name and date row in the comment column
    commentCol.appendChild(commentRow2);  // puts the comment paragaph row in the comment column, under first row
    commentRow1.appendChild(nameElem);    // puts the name in the first row, in the comment column
    commentRow1.appendChild(messageTimeElem); // puts the date of comment in the first row, in the comment column
    commentRow2.appendChild(messageElem); // puts the comment paragraph  in the second row, in the comment column

    messageList.appendChild(messageLi);   //  and tadaaahhh! Finally, appends to <ul> and I made it!
  });
};

const sortByDate = (arr) => arr.sort((a, b) => b.timestamp - a.timestamp);