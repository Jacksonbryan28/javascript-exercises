const convertToCelsius = function (startDeg) {
  let answer = 0;
  let unroundedAnswer;
  //converts the input to celcius
  unroundedAnswer = ((startDeg - 32) * 5) / 9;
  //if answer has a decimal place round it to one
  if (unroundedAnswer % 1 !== 0) {
    //makes it go to one decimal place
    answer = Number.parseFloat(unroundedAnswer).toFixed(1);
    answer = Number(answer);
  } else {
    Number(unroundedAnswer);
    answer = unroundedAnswer;
  }

  return answer;
};

const convertToFahrenheit = function (startDeg) {
  let answer = 0;
  let unroundedAnswer;

  unroundedAnswer = (startDeg * 9) / 5 + 32;

  //if answer has a decimal place round it to one
  if (unroundedAnswer % 1 !== 0) {
    //makes it go to one decimal place
    answer = Number.parseFloat(unroundedAnswer).toFixed(1);
    answer = Number(answer);
  } else {
    Number(unroundedAnswer);
    answer = unroundedAnswer;
  }

  return answer;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
