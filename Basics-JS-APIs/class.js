class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  static MyType() {
    console.log("Animal");
  }
  makeSound() {
    console.log(this.speaks);
  }
}

let dog = new Animal("Maicha", 4, "Bhow Bhow");
dog.makeSound();
Animal.MyType();
