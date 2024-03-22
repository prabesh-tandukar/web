/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
///test

function isAnagram(str1, str2) {
  let len = str1.length;
  let len2 = str2.length;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const array1 = [];
  const array2 = [];
  for (let i = 0; i < len; i++) {
    array1.push(str1[i]);
  }
  for (let i = 0; i < len2; i++) {
    array2.push(str2[i]);
  }
  array1.sort();
  array2.sort();
  console.log(array1);
  console.log(array2);
  str1 = array1.toString();
  str2 = array2.toString();
  console.log(str1, str2);
  const final = [];
  if (str1 === str2) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        final.push(array1[i]);
      }
    }
  }
  let finalStr = final.toString();

  if (finalStr === str1) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

console.log(isAnagram("aab", "bba"));
module.exports = isAnagram;
