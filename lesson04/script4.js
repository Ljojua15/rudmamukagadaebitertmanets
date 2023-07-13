const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") getMessage();
});

function getMessage() {
  document.getElementById("message-output").innerHTML = messageInput.value;
  messageInput.value = "";
}

var count = 0;
const click = document.getElementsByClassName("bttnclass");
click.addEventListener("keydown", function (event) {
  if (event.key == "Enter") change();
});

function change(num) {
  count += num;
  document.getElementById("count").innerHTML = count;
}
