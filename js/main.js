// 325.65546
// Math.ceil();
// Math.floor();
// Math.round();
// .toFixed

// UTILS
// Получение рандомного числа в дипазоне min, max
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Number((Math.random() * (max - min) + min).toFixed());
};

const createNoRepeatRandomIdFromRange = (min, max) => {
  const previousValues = [];
  return () => {
    let currentValue = getRandomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      currentValue = getRandomNumber(min, max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// CONSTANTS
const DESCRIPTIONS = ['Круто', 'Плохо', 'Хорошо снято'];
const NAMES = ['Ruslan', 'Danil', 'Kulam', 'Max'];
const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.'];

const getRandomMessage = () => {
  let Result = '';
  const getRandomComment = createNoRepeatRandomIdFromRange(0, COMMENTS.length - 1);
  const maxMessages = getRandomNumber(1, 2);
  for (let i = 0; i < maxMessages; i++) {
    Result += COMMENTS[getRandomComment()]
  }

  return Result;
};

const getRandomCommentId = createNoRepeatRandomIdFromRange(1,1000);
const createComment = () => ({
  id: getRandomCommentId(),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.jpg`,
  name: NAMES[getRandomNumber(0, NAMES.length - 1)],
  mesage: getRandomMessage(),
});

const getRandomItemId = createNoRepeatRandomIdFromRange(1,25);
const createItem = () => {
  const id = getRandomItemId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    likes: getRandomNumber(15, 200),
    description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)],
    coments: Array.from({length: getRandomNumber(0, 30)}, createComment),
  }}

const result = Array.from({length: 25}, createItem);
сonsole.log('result', result);
