let querySingle = document.querySelector("#single");

function singleEvent() {
  querySingle.addEventListener("click", singleEvent);
}

function singleEvent(event) {
  querySingle.innerHTML = "Take One Event!";
}
