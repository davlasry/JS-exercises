// 3, 6, 4 (3-6, 5)  => [3, 4, 6]
// 3, 5, 6 (3-6, 4)
// 2, 5, 4, 6 (2-6, 3)
// 2, 6, 3, 4 (2-6, 5)

const findMissingNumberInArray = (array) => {
  const minValue = Math.min(array);

  const numbersArray = [];
  for (let i = 0; i < array.length; i++) {
    numbersArray[array[i] - minValue] = true;
  }

  return numbersArray.findIndex((isExist) => !isExist) + minValue;
};

[3, 4, 6, 7, 8];
[true, true, undefined, true, true, true];
