let contentText
let authorText
function getQuote(){
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
    contentText = document.getElementById('text')
    contentText.innerHTML = data.content
    authorText = document.getElementById('author')
    authorText.innerHTML = data.author
  
    })
    .catch(error => {
        console.log("An error occurred:", error);
    });
}