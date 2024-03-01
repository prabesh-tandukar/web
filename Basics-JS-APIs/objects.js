//Object methods

let sampleObject = {
  key1: "val1",
  keyu2: "val3",
  key2: "valll",
};

console.log("Original object:", sampleObject);

console.log("Afer Object.keys():", Object.keys(sampleObject));
console.log("Object.values():", Object.values(sampleObject));
console.log("Object.entries():", Object.entries(sampleObject));
console.log("hasOwnProperty():", sampleObject.hasOwnProperty("key1"));
sampleObject = Object.assign({}, sampleObject, { key3: "bro" });
console.log(
  "Object.assign():",
  Object.assign({}, sampleObject, { key3: "bro" })
);
console.log(sampleObject);
