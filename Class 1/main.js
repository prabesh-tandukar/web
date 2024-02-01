//variables: let, const, var
//if else
//for loop

// for (let i = 0; i < 1001; i++) {
//   console.log(i);
// }

//Array
const personArray = ["ram", "sam", "hari"];

const ages = [21, 22, 23, 24, 25];

//print all the even numbers form the ages array
for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}

//write a program to print the biggest number in an array
const big = [100, 4, 7, 8, 9, 111111, 89, 78787878];
let biggest = big[0];
for (let i = 0; i < big.length; i++) {
  if (big[i] > biggest) {
    biggest = big[i];
  }
}
console.log(biggest);

//make two arrays and store the person name in one array and the persons gender in another array , these are two separate array but just connected logically
//then print the name of the person whose gender are male
const personsArray = ["ram", "sam", "hari", "sita", "rita"];
const genderArray = ["male", "male", "male", "female", "female"];

for (let i = 0; i < personsArray.length; i++) {
  if (genderArray[i] == "male") {
    console.log(personsArray[i]);
  }
}

const user1 = {
  firstName: "ram",
  gender: "male",
};

console.log(user1["firstName"]);

const allUsers = [
  { firstName: "ram", gender: "male" },
  { firstName: "sam", gender: "male" },
  { firstName: "sita", gender: "female" },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] == "male") {
    console.log(allUsers[i]["firstName"]);
  }
}

//write a program that reverses all the elements of an array
const reverseThis = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let reversed = [];
for (let i = reverseThis.length - 1; i >= 0; i--) {
  console.log(i);
  reversed.push(reverseThis[i]);
}
console.log(reversed);

console.log(reverseThis.length);

function 