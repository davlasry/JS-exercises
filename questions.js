const isAnagram = (string1, string2) => {
  if (string1.length !== string2.length) return false;

  const string1LettersObject = createStringLettersObject(string1);
  const string2LettersObject = createStringLettersObject(string2);

  return Object.entries(string1LettersObject).every(
    ([key, value]) => string2LettersObject[key] === value
  );
};

const createStringLettersObject = (string) => {
  return string.split("").reduce((stringLettersObject, letter) => {
    const currentStringLettersObject = { ...stringLettersObject };

    if (!currentStringLettersObject[letter]) {
      currentStringLettersObject[letter] = 1;
    } else {
      currentStringLettersObject[letter]++;
    }

    return currentStringLettersObject;
  }, {});
};

const isStringsInArrayAnagram = (strings) => {
  if (!isArraysSameLength(strings)) return false;

  const stringsHashmaps = [];

  strings.forEach((string) => {
    stringsHashmaps.push(createStringLettersObject(string));
  });

  return Object.entries(string1LettersObject).every(
    ([key, value]) => string2LettersObject[key] === value
  );
};

const isArraysSameLength = (stringsArray) => {
  const [firstString, ...restOfStrings] = stringsArray;

  return restOfStrings.every((string) => string.length === firstString.length);
};
