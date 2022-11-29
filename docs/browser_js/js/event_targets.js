let querySingle = document.querySelector("#single");

querySingle.addEventListener("click", (event) => {
  singleEvent(event);
});

function singleEvent(event) {
  console.log(event);
  querySingle.innerHTML = "Take One Event!";
}

let queryKeydown = document.querySelector("#keydown");
queryKeydown.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code == "Enter") {
    keydownDesc(queryKeydown.value);
  }
  console.log(event.target);
});

function keydownDesc(desc) {
  let queryKeydownDesc = document.querySelector("#keydownDesc");
  queryKeydownDesc.innerHTML = desc;
}

let queryload = document.querySelector("#keydownDesc");
queryload.addEventListener("load", queryLoad());

function queryLoad() {
  queryload.innerHTML = "Done On Load!";
}
