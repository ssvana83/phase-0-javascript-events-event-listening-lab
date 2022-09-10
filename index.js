// let input = document.getElementById('input')

// function addingEventListener() {
//   input.addEventListener('click', function() {
//     alert('I was clicked');
//   });
// }

// function addingEventListener() {
//   const input = document.getElementById('input');
//     alert('I was clicked!');
//     input.addingEventListener('click', addingEventListener);
//   }

// addingEventListener();
// input.addingEventListener('click', addingEventListener);

function addingEventListener() {
  const input = document.getElementById('button');
  input.addEventListener('click', function() {
    alert('I was clicked!');
  });
}

addingEventListener()