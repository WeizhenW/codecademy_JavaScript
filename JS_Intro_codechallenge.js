// finalGrade()
function finalGrade(one, two, three) {

  if(checkInvalid(one, two, three)) {
    return "You have entered an invalid grade.";
  } else {
    const average = (one + two + three) / 3;

    if(average >= 0 && average <= 59) {
      return "F";
    } else if(average >= 60 && average <= 69) {
      return "D";
    } else if(average >= 70 && average <= 79) {
      return "C";
    } else if(average >= 80 && average <= 89) {
      return "B";
    } else if(average >= 90 && average <= 100) {
      return "A";
    }
  }
  function checkInvalid(one, two, three) {
    if(one >= 0 && one <= 100 && two >= 0 && two <= 100 && three >= 0 && three <= 100) {
      return false
  	} else {
    return true
  	}
  }
};

// report for duty
function reportingForDuty(rank, lastName) {
  return `${rank} ${lastName} reporting for duty!`
}

//roll the dice
const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random() * 6) + 1
    let die2 = Math.floor(Math.random() * 6) + 1
    return die1 + die2
}

//calculate weight
et calculateWeight = (earthWeight, planet) => {
  switch (planet) {
    case "Mercury":
      return earthWeight * 0.378;
      break;
    case "Venus":
      return earthWeight * 0.907;
      break;
    case "Mars":
      return earthWeight * 0.377;
      break;
    case "Jupiter":
      return earthWeight * 2.36;
      break;
    case "Saturn":
      return earthWeight * 0.916;
      break;
    default:
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
      break;
  }
}

//truthy or falsy
let truthyOrFalsy = value => {
  return (value ? true: false);
}

//tip calculator

let tipCalculator = (quality, total) => {
  switch(quality) {
    case "bad":
      return total * 0.05;
      break;
    case "ok":
      return total * 0.15;
      break;
    case "good":
      return total * 0.20;
      break;
    case "excellent":
      return total * 0.30;
      break;
    default:
      return total * 0.18;
      break;

  }
}

//emoticon

let toEmoticon = string => {
  switch(string) {
    case 'shrug':
      return '|_{"}_|';
      break;
    case 'smiley face':
      return ':)';
      break;
    case 'frowny face':
      return ':(';
      break;
    case 'winky face':
      return ';)';
      break;
    case 'heart':
      return '<3';
      break;
    default:
      return '|_(* ~ *)_|';
      break;

  }
}
