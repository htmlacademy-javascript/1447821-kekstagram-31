// задание 1
/*
const checkSizeString = (string = '', maxSimbols = 1) => string.length <=
maxsymbols;

console.log(checkSizeString('проверяемая строка', 20));

console.log(checkSizeString('проверяемая строка', 18));

console.log(checkSizeString('проверяемая строка', 10));


// Задание 2

const checkpalindrome = (string = '') => {

  string = string.replaceAll('','').toUpperCase();

  let reverseString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }

  return reverseString === string;
}

console.log(checkPalidrom('топот'));

console.log(checkPalidrom('ДовОд'));

console. log(checkPalidrom('Кекс'));

console.log(checkPalidrom('Лёша на полке клопа нашёл '));

Задание 3
/
const extractNumber = (string) =>{
  let result = '';

  for (let i = 0; i <= string.length - 1; i++) {
    if(Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }

  return result === '' ? NaN : Number(result);
}

console.log(extractNumber('2023 год'));
console.log(extractNumber('ECMAScript 2022'));
console.log(extractNumber('1 кефир, 0.5 батона'));
console.log(extractNumber('aгент-007'));
console.log(extractNumber('a я томат'));
console.log(extractNumber(2023));
console.log(extractNumber(-1));
console.log(extractNumber(1.5));
*/

//
/*
module5-task2

const timeStringToMinutes = (timeString) =>{
  const splitTime = timeString.split(':');
  const formattedTime = splitTime.map((i) => Number(i));
  return formattedTime[0] * 60 + formattedTime[1];
};

const isMeetinginWorkingHours = (startWorkingTime, endWorkingTime, meetingStart,meetingTime) => {
  const startWorkingMinutes = timeStringToMinutes(startWorkingTime);
  const endWorkingMinutes = timeStringToMinutes(endWorkingTime);
  const meetingStartMinutes = timeStringToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingTime;

  return meetingStartMinutes >= startWorkingMinutes && meetingEndMinutes <=
endWorkingMinutes;
};

console.log(isMeetinginWorkingHours('08:00','17:30','14:00',90));// true
console.log(isMeetinginWorkingHours('8:0','10:0', '8:0', 120)); // true
console.log(isMeetinginWorkingHours('08:00', '14:30', '14:00',90));//false
console.log(isMeetinginWorkingHours('14:00', '17:30','08:0',90));//false
console.log(isMeetinginWorkingHours('8:00','17:30','08:00',900));// false
