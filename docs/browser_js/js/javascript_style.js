let removeBtn = document.querySelector("#removeBtn");
let hideBtn = document.querySelector("#hideBtn");
let resetBtn = document.querySelector("#resetBtn");

let remove;
let hide;

removeBtn.addEventListener("click", (event) => {
  removeEvent(event);
});

hideBtn.addEventListener("click", (event) => {
  hideEvent(event);
});

resetBtn.addEventListener("click", (event) => {
  resetEvent(event);
});

function removeEvent(event) {
  remove = document.querySelector("#remove");
  remove.style.display = "none";
}

function hideEvent(event) {
  hide = document.querySelector("#hide");
  hide.style.visibility = "hidden";
}

function resetEvent(event) {
  remove.style.display = "block";
  hide.style.visibility = "visible";
}
