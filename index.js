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

 
