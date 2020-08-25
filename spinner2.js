const spinner = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];
let timer = 100;
  for (let char of spinner) {
    timer += 500;
    setTimeout(() => {
      process.stdout.write(`${char}   `);
    }, timer);
  }

setTimeout(() => { console.log(); }, timer);