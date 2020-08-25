const spinner = ['\r|', '\r/', '\r-', '\r\\'];
let timer = 100;
for (let i = 0; i < 3; i++) {  
  for (let char of spinner) {
    timer += 200;
    setTimeout(() => {
      process.stdout.write(`${char}   `);
    }, timer);
  }
}

setTimeout(() => {
  process.stdout.write('\r|   ');
}, timer += 200);

setTimeout(() => {
  process.stdout.write('\n');
}, timer);
