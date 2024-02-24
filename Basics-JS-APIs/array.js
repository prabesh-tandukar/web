//array
const initialArray = [1, 2, 3];
//put something in the end
initialArray.push(1);
console.log(initialArray);
//remove something form the end
initialArray.pop();
console.log(initialArray);
//remove something from the start
initialArray.shift();
console.log(initialArray);
//add somthing in the start
initialArray.unshift(4);
console.log(initialArray);

const secondArray = [7, 8, 9];
//concat two arrays
console.log(initialArray.concat(secondArray));

//in push the second argument is a number in concat the second argument is a array
