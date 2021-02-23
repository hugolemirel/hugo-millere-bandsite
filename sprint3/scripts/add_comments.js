
const messageForm = document.getElementById("messageForm");// Gets the comments form
const messageList = document.getElementById("messageList");// Gets the comments list to be populated
const messageArr = [];// Creates the array 


messageForm.addEventListener("submit", (event) => { // form submit event

  event.preventDefault(); // prevents page from reloading and form submitting
  const name = event.target.name.value; // gets the input value by the name attribute 'name'
  const message = event.target.message.value; // gets the input value by the name attribute 'message'

  if (name && message) { // checks if name and message inputs have a value
    // pushes an object to the message array
    messageArr.push({
      name: name,
      message: message,
      timestamp: Date.now()
    });

    postComment({
      name: name,
      comment: message,
    }) 

    renderMessages(messageArr); // calls "renderMessages" function, loops through array & creates DOM elements with new messages added to array above

    event.target.reset(); // resets the form inputs
  } else {
 // if no values are set for the input fields
    alert("please enter a name and message");
  }
});


  const renderMessages = (messages) => {   //appends elements to the dom from array of messages
  messageList.innerHTML = "";              // clears <ul> element before appending

  sortByDate(messages);                    // function which sorts the array by timestamp before looping

  messages.forEach((message) => {         // loops through messages

    const avatar = document.createElement("img"); // creates avatar img
    avatar.src = 'https://pbs.twimg.com/profile_images/1443771405/tom_400x400.jpg';
    avatar.classList.add('avatar');
    
    const messageLi = document.createElement("li"); // creates <li> as a whole data container

    const avatarCol = document.createElement("div"); // creates left column for avatar
    avatarCol.classList.add('avatar-col');

    const commentCol = document.createElement("div"); // creates right column for name, date & comment
    commentCol.classList.add('comment-col');

    const commentRow1 = document.createElement("div"); // creates a first row for name and date of comment
    commentRow1.classList.add('commentIdent');

    const commentRow2 = document.createElement("div"); // creates a second row for comment paragraph.
    commentRow2.classList.add('comment');

    const nameElem = document.createElement("h3");  // creates <h3> for name
    nameElem.innerText = message.name;
// (I can add classes to each element with .classList.add();
// nameElem.classList.add('message-form__name') );

    const messageElem = document.createElement("p");  // creates <p> for message
    messageElem.innerText = message.comment;

    const messageTimeElem = document.createElement("h4");  // creates <time> element
    messageTimeElem.innerText = new Date(
      message.timestamp
    ).toLocaleDateString();

// !IMPORTANT appends all elements to the "avatarCol", <li>, "commentCol" & "commentRows" before appending to the <ul> 
    avatarCol.appendChild(avatar);        // inserts the avatar img in the avatar column
    messageLi.appendChild(avatarCol);     // inserts the avatar column in the <Li>
    messageLi.appendChild(commentCol);    // inserts the comment column in the <Li>
    commentCol.appendChild(commentRow1);  // inserts the name and date row in the comment column
    commentCol.appendChild(commentRow2);  // inserts the comment paragaph row in the comment column, under first row
    commentRow1.appendChild(nameElem);    // inserts the name in the first row, in the comment column
    commentRow1.appendChild(messageTimeElem); // inserts the date of comment in the first row,in comment column
    commentRow2.appendChild(messageElem); // inserts the comment paragraph in the second row, in comment column

    messageList.appendChild(messageLi);   //  and tadaaahhh! Finally, appends to <ul> and I made it!
  });
};

// funtion to help sort the messages array by date, 
// call before looping https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const sortByDate = (arr) => arr.sort((a, b) => b.timestamp - a.timestamp);


function getCommentData() {
  axios.get('https://project-1-api.herokuapp.com/comments?api_key=b739a23b-16c5-4e6a-8913-9051aca486b1')
  .then(function (response) {
    // handle success
    console.log(response);
  renderMessages(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

getCommentData();

function postComment(comment) {
  axios.post('https://project-1-api.herokuapp.com/comments?api_key=b739a23b-16c5-4e6a-8913-9051aca486b1', comment)
  .then(function (response) {
    // handles success
    console.log(response);
  // renderMessages(response.data);

  getCommentData();
  })
  .catch(function (error) {
    // handles error
    console.log(error);
  })
}