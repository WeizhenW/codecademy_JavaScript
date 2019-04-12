//variables defination
const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");

const closedDoorPath =
"https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"; //closed door image
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById('start');
let currentlyPlaying = true;//if true, not all 3 doors have been opened yet


//three different events
doorImage1.onclick = function() {
  if(isClicked('door1') === false && currentlyPlaying) {
    document.getElementById("door1").src = openDoor1;
    playDoor('door1');
  }
}

doorImage2.onclick = function() {
  if(isClicked('door2') === false && currentlyPlaying) {
    document.getElementById("door2").src = openDoor2;
    playDoor('door2');
  }
}

doorImage3.onclick = function() {
  if(isClicked('door3') === false && currentlyPlaying) {
    document.getElementById("door3").src = openDoor3;
    playDoor('door3');
  }
}
//start over by clicking start button
startButton.onclick = function() {
  if(currentlyPlaying === false) {
		startRound();
  }
}

//start over function
let startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

//3 open door image sources
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

//generate random number 0, 1 or 2 to determine which door will have the Bot
let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);

  switch(choreDoor) {
    case 0:
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 1:
      openDoor2 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor3 = beachDoorPath;
      break;
    case 2:
      openDoor3 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
      break;

  }
}


//check if Bot is clicked
let isBot = (door) => {
  return document.getElementById(door).src === botDoorPath;
} //return true if Bot clicked

//confirm each door can only be clicked once
let isClicked = door => {
    if(document.getElementById(door).src === closedDoorPath) {
      return false; //false means never opened, OK to click
    } else {
      return true;// true means has been opened, can't click
    }
  }

let playDoor = (doorImage) => {
  numClosedDoors--;
  if(numClosedDoors !== 0 && isBot(doorImage)) {
    gameOver();
  } else if(numClosedDoors === 0) {
    gameOver('win');
  }
}

let gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
}

startRound();
