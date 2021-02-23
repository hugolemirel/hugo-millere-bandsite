
// ul from the DOM
const post = document.getElementById('posts'); 

function getPosts() {
    axios
    .get('http://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        //handle success response
        // console.log(response);
        // console.log(response.data);
        response.data.forEach((postObj) => {
                // console.log(postObj.title);
                const li = document.createElement('li');
                li.innerText = postObj.title;
                posts.appendChild(li);
            });
    })
    .catch(function (error) {
        // handles errors
        console.log(error);
    });
}
getPosts();