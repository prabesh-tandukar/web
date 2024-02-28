//JSON.parse
//JSON.stringlify
const users = '{"name": "harkirat", "age": 24, "gender": "male"}';
const user = JSON.parse(users);

console.log(user["name"]);

const desc = {
  name: "prabesh",
  gender: "male",
};

const finalString = JSON.stringify(desc);
console.log(finalString);
