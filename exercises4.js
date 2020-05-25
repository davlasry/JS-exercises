/** 25.05.2020 */

// Function that receives two arrays and check if there are rotation
const isArraysRotation = (array1, array2) => {
  const occurrencesArray1 = findArrayOccurrences(array1);
  const occurrencesArray2 = findArrayOccurrences(array2);

  if (
    Object.keys(occurrencesArray1).length !==
    Object.keys(occurrencesArray2).length
  ) {
    return false;
  }

  for (const [character, occurrenceInArray1] of Object.entries(
    occurrencesArray1
  )) {
    if (
      !occurrencesArray2[character] ||
      occurrenceInArray1 !== occurrencesArray2[character].occurrence
    ) {
      return false;
    }
  }

  return true;
};

const findArrayOccurrences = (array) => {
  const occurrencesArray = {};

  array.forEach((character) => {
    if (!occurrencesArray[character]) {
      occurrencesArray[character] = 1;
    } else {
      occurrencesArray[character]++;
    }
  });

  return occurrencesArray;
};
