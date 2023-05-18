function like() {
  let h1CounterTag = document.querySelector("#likecounter");
  let existingValue = h1CounterTag.innerHTML;
  let newValue = parseInt(existingValue) + 1;
  h1CounterTag.innerHTML = newValue;
}

function dislike() {
  let h1CounterTag = document.querySelector("#dislikecounter");
  let existingValue = h1CounterTag.innerHTML;
  let newValue = parseInt(existingValue) + 1;
  h1CounterTag.innerHTML = newValue;
}


function increaseCount(type) 

{
  if (type === 'likes') {
     likes++;
  } else if (type === 'dislikes') {
    dislikes++;
  }
}


function applyAvailability(p1) {
  let inputAddToCartTag = document.querySelector("#add-to-cart");

  if (p1) {
    inputAddToCartTag.removeAttribute("disabled");
  } else {
    inputAddToCartTag.setAttribute("disabled", "true");
  }
}