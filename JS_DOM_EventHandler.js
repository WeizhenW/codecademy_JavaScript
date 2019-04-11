//event handler registration
let readMore = document.getElementById('read-more')
let moreInfo = document.getElementById('more-info')

// Write your code here:
readMore.onclick = function() {
  moreInfo.style.display = 'block';

}

//add event handler
// Add the code you want to test below:
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let margo = document.getElementById('margo');

let open = function() {
  margo.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  margo.style.display = 'none';
  close.style.display = 'none';
};

view.onclick = open;
close.onclick = hide;

// Write your code here
let textChange = function() {
  view.innerHTML = 'Hello, World!';
}

let textReturn = function() {
  view.innerHTML = 'View';
}

view.addEventListener('click', textChange);

close.addEventListener('click',textReturn);

//remove event handler
let door = document.getElementById('door');
let unlock = document.getElementById('unlock');
let lock = document.getElementById('lock');
let sign = document.getElementById('sign');
let cafeImage = document.getElementById('image');

cafeImage.hidden = true;

let openDoor = function() {
  door.hidden = true;
  cafeImage.hidden = false;
}

let closeDoor = function(){
  door.hidden = false;
  cafeImage.hidden = true;
}

unlock.onclick = function() {
  sign.innerHTML = 'OPEN';
  unlock.style.backgroundColor = '#6400e4';
  lock.style.backgroundColor = 'lightgray';
}

lock.onclick = function() {
  sign.innerHTML = 'CLOSED';
  lock.style.backgroundColor = '#6400e4';
  unlock.style.backgroundColor = 'lightgray';
}

unlock.addEventListener('click', function(){
  door.addEventListener('click', openDoor);
  cafeImage.addEventListener('click', closeDoor);
})

// Write your code here
lock.addEventListener('click', function() {
  door.removeEventListener('click', openDoor);
})
//event object property
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = 'none';
  text.innerHTML = event.timeStamp;
}

share.onclick = sharePhoto;

//event type
// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function that will creates color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below
let colorChange = function() {
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor;
}

button.onclick = colorChange;
mysteryButton.onwheel = colorChange;


//mouse event
// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.hidden = true;
};
resetButton.onclick = reset;

// Write code for the first list item
itemOne.onmouseover = function() {
  itemOne.style.width = '800px';
}


// Write code for the second list item
itemTwo.onmouseup = function() {
  itemTwo.style.backgroundColor = 'red';
}

// Write code for the third list item
itemThree.onmouseout = function() {
  itemThree.innerHTML = 'The mouse has left the element.';
}

// Write code for the fourth list item
itemFour.onmousedown = function() {
  itemFive.style.display = 'block';
}
//keyboard event
let ball = document.getElementById('float-circle');

// Write your code below
let up = function() {
  ball.style.bottom = '250px';
}

let down = function() {
  ball.style.bottom = '50px';

}

document.onkeydown = up;
document.onkeyup = down;
