function validateForm() {
  let fnamevalue = document.forms["myForm"]["fname"].value;
  if (fnamevalue == "") {
    let queryErrorId = document.querySelector("#fnameErrorId");
    queryErrorId.innerHTML = "Name must be filled in";
    queryErrorId.style.color = "red";
    return false;
  }
  return true;
}

let btnsearch = document.querySelector("#btnsearch");
btnsearch.addEventListener("click", (event) => {
  searchForm(event);
});

function searchForm(event) {
  let searchInput = document.querySelector("#searchId");
  let searchValue = searchInput.value;

  let text;
  if (searchValue < 1 || searchValue > 10) {
    text = "Input Not valid!";
  } else {
    text = "Input Ok";
  }
  document.querySelector("#searchDescId").innerHTML = text;
}
