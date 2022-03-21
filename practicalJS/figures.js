// Square code
console.group("Square");
// const squareSide = 7;
// console.log(`The square sides measure: ${squareSide} cm`);

function squarePerimeter(side) {
  return side * 4;
}
// console.log(`The square perimeter is: ${squarePerimeter} cm`);

function squareArea(side) {
  return side * side;
}
// console.log(`The square area is: ${squareArea} cm²`);
console.groupEnd();

// Triangle code
console.group("Triangle");

// const triangleSide1 = 7;
// const triangleSide2 = 4;
// const triangleBase = 8;
// const triangleTall = 4.4;
// console.log(`The triangle sides measure: ${triangleSide1} cm, ${triangleSide2} cm, ${triangleBase} cm`);

// const triangleHeight = 4.4;
// console.log(`The triangle tall is: ${triangleHeight}`);

function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
}
// console.log(`The triangle perimeter is: ${trianglePerimeter} cm`);

function triangleArea(base, height) {
  return (base * height) / 2;
}
// console.log(`The triangle area is: ${triangleArea} cm²`);

console.groupEnd();

// Circle code
console.group("Circle");

// Radius
// const circleRadius = 4;
// console.log(`The circle radius is: ${circleRadius} cm`);

// Diameter
function circleDiameter(radius) {
  return radius * 2;
}
// console.log(`The circle diameter is: ${circleDiameter} cm`);

// PI
const PI = Math.PI;
console.log(`PI: ${PI}`);

// Circunference
function circlePerimeter(radius) {
  const diameter = circleDiameter(radius);
  return diameter * PI;
}
// console.log(`The circle perimeter is: ${circlePerimeter} cm`);

// Area
function circleArea(radius) {
  return PI * (radius * radius);
}
// console.log(`The circle area is: ${circleArea} cm²`);

console.groupEnd();

// Here is the interaction with html
function squarePerimeterCalculate() {
  const input = document.getElementById("SquareInput");
  const value = input.value;

  const perimeter = squarePerimeter(value);
  alert(perimeter);
}
function squareAreaCalculate() {
  const input = document.getElementById("SquareInput");
  const value = input.value;

  const area = squareArea(value);
  alert(area);
}

function isocelesTriangleHeight(bigTriangleASide, bigTriangleBSide, bigTriangleBaseSide) {
  if (bigTriangleASide != bigTriangleBSide) {
    console.error("The a side and b side are not equal");
  } else {
    const smallTriangleBSide = bigTriangleBaseSide / 2;
    const smallTriangleBaseSide = bigTriangleASide;

    const squareSmallTriangleBSide = smallTriangleBSide * smallTriangleBSide;
    const squareSmallTriangleBaseSide = smallTriangleBaseSide * smallTriangleBaseSide;

    const smallTriangleASide = Math.sqrt(squareSmallTriangleBaseSide - squareSmallTriangleBSide)
    
    const bigTriangleHeight = smallTriangleASide;
    return bigTriangleHeight;
  }
}