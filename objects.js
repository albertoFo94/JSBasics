var myCar = {
  label: "Toyota",
  model: "Corolla",
  year: 2020,
  carDetail: function() {
    console.log(`Car ${this.model} ${this.year}`);
  }
};

console.log(myCar.label);
console.log(myCar.year);
console.log(myCar.carDetail());

function car(label, model, year) {
  this.label = label;
  this.model = model;
  this.year = year;
}

var newCar = new car("Tesla", "Model 3", 2020);

console.log(newCar);

var newCar2 = new car("Tesla", "Model X", 2018);
var newCar3 = new car("Toyota", "Corolla", 2020);

console.log(newCar2);
console.log(newCar3);