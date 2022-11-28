let querySingle = document.querySelector("#single");

querySingle.addEventListener("click", (event) => {
  singleEvent(event);
});

function singleEvent(event) {
  console.log(event);
  querySingle.innerHTML = "Take One Event!";
}
