// 3, 6, 4 (3-6, 5)  => [3, 4, 6]
// 3, 5, 6 (3-6, 4)
// 2, 5, 4, 6 (2-6, 3)
// 2, 6, 3, 4 (2-6, 5)

const findMissingNumberInArray = (array) => {
  const minValue = Math.min(array);
  const maxValue = Math.max(array);

  const numbersArray = [];
  for (let i = 0; i < array.length; i++) {
    numbersArray[array[i]] = true;
  }

  return numbersArray.findIndex((number) => !!number);
};

[false, false, true, false, true, true];
