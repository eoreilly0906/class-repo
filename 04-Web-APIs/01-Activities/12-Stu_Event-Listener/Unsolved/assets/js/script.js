let count = 0;
const incrementEl = document.querySelector('#increment');
const decrementEl = document.querySelector('#decrement');
const countEl = document.querySelector('#count');

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener('click', incrementNumber);
  function incrementNumber() {
    count++;
    document.querySelector('#count').textContent = count;
}

decrementEl.addEventListener('click', decrementNumber);
function decrementNumber() {
  if (count > 0) {
 
}
  count--;
  document.querySelector('#count').textContent = count;
}

  

