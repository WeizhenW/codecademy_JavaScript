// reverse array
//using function declaration
function reverseArray(array) {
  let newArray = [];
  for(i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
//using arrow function
const reverseArray = array => {
  let newArray = [];
  for(i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

//greeting alien
const greetAliens = array => {
  for(i = 0; i < array.length; i ++) {
    console.log(`Oh powerful ${array[i]}, we humans offer our unconditional surrender!`);
  }
}

//convert to baby

const convertToBaby = array => {
  newArray = [];
  array.forEach(function(animal) {
    newArray.push(`baby ${animal}`);
  })
  return newArray;
}

function convertToBaby(array) {
  array.map(function(animal) {
    return 'baby ' + animal;
  });
}

//smallest power of 2

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers))

//accept/decline everything

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => {
  arr.forEach(function(element) {
    return politelyDecline(element);
  })
}

declineEverything(veggies);

const acceptEverything = arr => {
  arr.forEach(function(element) {
    console.log(`Ok, I guess I will eat some ${element}.`)
  })
}

acceptEverything(veggies);

//return square
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:

const squareNums = arr => {
  return arr.map(num => {
    return num * num;
  })
}


//to upper case
const shoutGreetings = arr => {
  return arr.map(str => str.toUpperCase() + "!")
}

//sort in descending order
const sortYears = arr => {
  arr.sort(function(a,b) {return b-a});
  return arr;
}

//find common elements
const justCoolStuff = (arr1, arr2) => {
  return arr1.filter(str1 => {
    return arr2.find(str2 => str2 === str1);
  })
}

//if food is vegan
const isTheDinnerVegan = arr => {
  let vegan = true;
  arr.forEach(function(food) {
    if(food.source !== 'plant') {
      vegan = false;
    }
  })
  return vegan;
}
