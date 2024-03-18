function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector) {
  var newX = this.x + vector.x;
  var newY = this.y + vector.y;
  return new Vector(newX, newY);
};

Vector.prototype.minus = function(vector) {
  var newX = this.x - vector.x;
  var newY = this.y - vector.y;
  return new Vector(newX, newY);
};

Object.defineProperty(Vector.prototype, 'length', {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

var vector1 = new Vector(3, 4);
var vector2 = new Vector(1, 2);

var sumVector = vector1.plus(vector2);
console.log(sumVector);

var diffVector = vector1.minus(vector2);
console.log(diffVector);

console.log(vector1.length);
console.log(vector2.length);


function stretchCell(inner, width, height) {
  this.inner = inner;
  this.widt = width;
  this.height = height;
}

stretchCell.prototype.minwidth = function() {
  return Math.max(this.width, this.inner.minwidth());
};

stretchCell.prototype.minheight = function() {
  return Math.max(this.height, this.inner.minheight());
};

stretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, this.height);
};

var innerCell = {
  minwidth: function() {return 3; },
  minheight: function() {return 3; },
  draw: function(width, height) {
    return Array(height).fill(Array(width).fill("X").join("")).j
  }
};

var stretchCell = new stretchCell(innerCell,5, 3);
console.log(stretchCell.minwidth());
console.log(stretchCell.minheight());
console.log(stretchCell.draw(5, 3));





// function withBoxUnlock(){
//   var mainBox = {
//     unlocked: function () {
//       this.unlock = true;
//     },
//     locked: function () {
//       this.unlock = false;
//     },
//     unlock: true,
//     getValue: [],
//     display(){
//       if (this.unlock) throw "UNLOCKED";
//         return this.getValue;
//     }
//   }
//   }


//   console.log(unlock) 




const testStrings = [
  'The car is faster than expected  '
];

// Test each regular expression against the test strings
const regVales = [
  /ca[rt]/,
  /pr?op/,
  /fer(ret|ry|rari)/,
  /\b\w+ious\b/,
  /\s[.,:;]/,
  /\b\w{7,}\b/,
  /\b(?!.*e)\w+\b/,
];

regVales.forEach((regex, index) => {
  console.log(`Regular expression ${index + 1}: ${regex}`);
  testStrings.forEach((str) => {
    const result = regex.test(str);
    console.log(`"${str}" - Match found: ${result}`);
  });
  console.log('---');
});

