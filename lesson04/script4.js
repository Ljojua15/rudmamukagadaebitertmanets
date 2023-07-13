const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", function(event) {
    if (event.key == "Enter") getMessage();
});

function getMessage() {
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value = "";
}

// count space

var count = 0;
var click = document.getElementsByClassName("bttnincrease");
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        count += 1;
        click.innerHTML = count;
    }
});


//ენთერ ღილაკით თუ დავამატებთ რომ იზრდებოდეს კარგი იქნება


function change(num) {
    count += num;
    document.getElementById("count").innerHTML = count;
}