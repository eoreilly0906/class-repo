function keydownAction(event) {
  // TODO: Complete keydown function
  const KeyPress = event.key;
  const KeyCode = event.code
  document.querySelector('#key').textContent = KeyPress;
  document.querySelector('#code').textContent = KeyCode;
  document.querySelector('#status').textContent = 'KEYDOWN Event';
}

function keyupAction() {
  document.querySelector('#status').textContent = 'KEYUP Event';
}

document.addEventListener('keyup', keyupAction);
// TODO: Add Event Listener for 'keydown' event
document.addEventListener('keydown',keydownAction);
