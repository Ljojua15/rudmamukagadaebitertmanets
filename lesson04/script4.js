const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") getMessage();
});

function getMessage() {
  document.getElementById("message-output").innerHTML = messageInput.value;
  messageInput.value = "";
}

// count space

var count = 0;
const click = document.getElementsByClassName("bttnclass1");
click.addEventListener("keydown", function (event) {
  if (event.key == "Enter") change(1);
});

function change(num) {
  count += num;
  document.getElementById("count").innerHTML = count;
}
