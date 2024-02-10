//string apis

//length: gives the length of the string
function getLength(str) {
  console.log("Original String: ", str);
  console.log("Length: ", str.length);
}
getLength("Hello World");

//indexof: gives you the index of a character or the starting character of a word in a given string
function findIndexOf(str, target) {
  console.log("Original string: ", str);
  console.log("Index: ", str.indexOf(target));
}
findIndexOf("Hello World", "W");
findIndexOf("Nice Car", "Car");

//lastIndexOf: gives the last index of a character in a given string
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index: ", str.lastIndexOf(target));
}
findLastIndexOf("abcdefcadsa", "a");
findLastIndexOf("Hello World World", "World");

//slice: gives you a certain part of the string by taking the index arguments from where till where to slice the string
function getSlice(str, start, end) {
  console.log("Original String: ", str);
  console.log("After Slice: ", str.slice(start, end));
}
getSlice("Hello World", 0, 5);
getSlice("Slice the slice", 10, 15);
console.log("bhaibhaibhai".slice(0, 5));

//substr: depreciated but similar to slice but takes the starting point and the length of the string the needs to be sliced whereas in slice we inputed form where to where
function getSubstring(str, start, length) {
  console.log("Original String: ", str);
  console.log("After substring:", str.substr(start, length));
}
getSubstring("Hello World", 0, 5);

//diff bet getSlice and getSubstring
getSlice("abcdefghijklmnopqurstuvwxyz", 0, 5);
getSubstring("abcdefghijklmnopqurstuvwxyz", 0, 5);
getSlice("abcdefghijklmnopqurstuvwxyz", 2, 5);
getSubstring("abcdefghijklmnopqurstuvwxyz", 2, 5);

//replace:replace a given target with the replacement
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace: ", str.replace(target, replacement));
}
replaceString("K cha bro ?", "bro", "dude");
replaceString("Kata cha", "cha", "chas");

//splits a string on the basis of the the given delimitor and returns the result in a array as different elements
//delimitor is a something that is used to divide the given string into different group
//delimitor is not included in the result
function splitString(str, separator) {
  console.log("Original String: ", str);
  console.log("After Split:", str.split(separator));
}

splitString("Hello Word", " "); //here the delimitor is a space so the result will be a array with the element hello and word
console.log("Hieveryone".split()); // no delimitor the result is the whole string as a single element of the array
