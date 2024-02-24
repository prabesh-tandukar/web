//parseInt and parseFloat
//parseInt parse a given value to integer.

function parseIntoInt(value) {
  console.log("Original value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

parseIntoInt("22"); //converts any numeric value in string to int
parseIntoInt("43px"); //converts any numeric value with some characters at back to string
parseIntoInt("asdf56px"); //gives NaN
parseIntoInt("33.44"); //converts any numeric value but for this one will only convert till the point and give 33 as it parses to int and not float
parseIntoInt("ass44"); //gives error as it cannot parse with characters infront

function parseIntoFloat(value) {
  console.log("Original value:", value);
  let result = parseFloat(value);
  console.log("After parse float:", result);
}

parseIntoFloat("3.14");
parseIntoFloat("44px");
parseIntoFloat("33");
parseIntoFloat("mm33mm");
