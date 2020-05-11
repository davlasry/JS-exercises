const word1 = "radar";
const word2 = "i";
const word3 = "aa";
const word4 = "ab";
const word5 = "adsfds";

// const isPolyndrom = (string) => {
//   for (let i = 0; i < string.length / 2; i++) {
//     if (string[i] !== string[string.length - i - 1]) return false;
//   }

//   return true;
// };

const isPolyndrom = (string) => {
  return isPolyndromHelper(string, 0);
};

const isPolyndromHelper = (string, currentIndex) => {
  const stringLength = string.length;

  if (currentIndex >= stringLength / 2) {
    return true;
  }

  if (string[currentIndex] === string[stringLength - 1 - currentIndex]) {
    return isPolyndromHelper(string, currentIndex + 1);
  } else {
    return false;
  }
};

console.log(isPolyndrom(word1));
console.log(isPolyndrom(word2));
console.log(isPolyndrom(word3));
console.log(isPolyndrom(word4));
console.log(isPolyndrom(word5));

const getFirstUniqueLetterInString = (string) => {
  const letterOccurrences = {};

  for (let i = 0; i++; i < string.length) {
    if (letterOccurrences[string]) {
      letterOccurrences[string] = {
        isUnique: true,
        firstOccurrenceIndex: i,
        letterValue: string,
      };
    } else {
      letterOccurrences[string].isUnique = false;
    }
  }

  let resultLetter;

  for (const [_key, value] of Object.entries()) {
    if (
      value.isUnique &&
      (!resultLetter ||
        value.firstOccurrenceIndex < resultLetter.firstOccurrenceIndex)
    ) {
      resultLetter = value;
    }
  }

  return resultLetter.letterValue;
};

const getSumDigitsInNumber = (number) => {
  if (number < 1) {
    return;
  }

  getSumDigitsInNumber(Math.floor(number / 10));
};
