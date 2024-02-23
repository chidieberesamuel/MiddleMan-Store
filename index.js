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

