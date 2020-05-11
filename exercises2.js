// Function that returns the longest substring without duplicate characters
const longestSubstring = (string) => {
  let longestSubstringWithoutDuplicate = '';
  let currentString = '';
  let existingLetters = {};

  for (let i = 0; i < string.length; i++) {
    if (existingLetters[string[i]]) {
      currentString += string[i];
      existingLetters[string[i]] = true;
    } else {
      currentString = string[i];
      existingLetters = { [string[i]]: true };
    }
  }

  if (currentString.length >= longestSubstringWithoutDuplicate.length) {
    longestSubstringWithoutDuplicate = currentString;
  }

  return longestSubstringWithoutDuplicate;
};
