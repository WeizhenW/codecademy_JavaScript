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
