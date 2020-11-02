
const messageForm = document.getElementById("messageForm");
const messageList = document.getElementById("messageList");
const messageArr = [];

// form submit event
messageForm.addEventListener("submit", (event) => {
// prevent page from reloading and form submitting
  event.preventDefault(); 
// get the input value by the name attribute 'name'
  const name = event.target.name.value; 
// get the input value by the name attribute 'message'
  const message = event.target.message.value; 


// check if name and message inputs have a value
  if (name && message) {
    // push an object to the message array
    // messageArr.push({
    //   name: name,
    //   message: message,
    //   timestamp: Date.now()
    // });

    postComment({
      name: name,
      comment: message,
    }) 

// renderMessages function, loop through array & create DOM elements with new messages added to array above
    renderMessages(messageArr);

// reset the form inputs
    event.target.reset();
  } else {
 // if no values are set for the input fields
    alert("please enter a name and message");
  }
});

// append elements to the dom from array of messages
const renderMessages = (messages) => {
  messageList.innerHTML = ""; // clear <ul> element before appending

// function which sorts the array by timestamp before looping
  sortByDate(messages);

// loop through messages
  messages.forEach((message) => {

// create avatar img
    const avatar = document.createElement("img");
    avatar.src = 'https://pbs.twimg.com/profile_images/1443771405/tom_400x400.jpg';
    avatar.classList.add('avatar');

// create <li>
    const messageLi = document.createElement("li");

// create <h3> for name
    const nameElem = document.createElement("h3");
    nameElem.innerText = message.name;
// you can add classes to each element with .classList.add();
// nameElem.classList.add('message-form__name');

// create <p> for message
    const messageElem = document.createElement("p");
    messageElem.innerText = message.comment;

// create <time> element
    const messageTimeElem = document.createElement("h4");
    messageTimeElem.innerText = new Date(
      message.timestamp
    ).toLocaleDateString();

// !important: append all elements to the <li> before appending to the <ul>
    messageLi.appendChild(avatar);
    messageLi.appendChild(nameElem);
    messageLi.appendChild(messageTimeElem);
    messageLi.appendChild(messageElem);

// finally append to <ul>
    messageList.appendChild(messageLi);
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
    // handle success
    console.log(response);
  // renderMessages(response.data);

  getCommentData();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}