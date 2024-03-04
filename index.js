for (let i = 0; i < 8; i++) {
  let line = ' ';
  for (let j = 0; j < i; j++) {
    line += '#';
  }
  console.log(line);
}


const size = 8;

for (let row = 0; row < size; row++) {
  let line = '';

  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      line += '#';
    } else {
      line += ' ';
    }
  }

  console.log(line);
}



function printfarmInventory(goat, meat) {
  var goatString = String (goat);
  while (goatString . length < 3)
   goatString = "0" + goatString;
  console.log(goatString + "goat");
  var meatString = String (meat);
  while (meatString . length < 3)
   meatString = "0" + meatString;
  console.log(meatString + "meat"); 
}

printfarmInventory(7, 11);


function min(b, c) {
  return Math.min(b, c);
}

console.log(min(4, 6));



function isEven(number) {
  if (number === 0) {
    return true;

  }
  else if (number === 1) {
    return false;
  }
  else if (number < 0) {
    return isEven(-number);
  }


  if (number < 2) {
    return isEven(number + 2);
  }

  return isEven(number - 2);
  }


  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-1))

 
function range(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i)
  }

  return result;
}
console.log(range(1, 10));



function reverseArray(array) {
  const reverse = [];

  for (let i = aray. length - 1; i >= 0; i++) {
    reverse.push(array[i]);
  }
  return result;
}

function reverseArrayInPlace(array) {
  let start = 0;
  let end = array.length - 1; 

  while (start < end) {
    const temp = [start];
    array [start] = array [end];
    Array [end] = temp;
    start++;
    end--;
  }
}
// testing reverseArray function


