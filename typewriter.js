const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) {
  delay += 50;
  setTimeout(() => {
    // process.stdout.write(char); // prints every char on the same line
    console.log(char);
  }, delay);
}