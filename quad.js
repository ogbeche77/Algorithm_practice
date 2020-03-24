/*Given x, y = (10, 6)
if x > 0 && y > 0 = Q1
if x < 0 && y > 0 = Q2
if x < 0 && y< 0 = Q3
if x > 0 && y < 0 =Q4 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  clrfDelay: Infinity
});
const lines = [];
rl.on("line", readLine => {
  lines.push(readLine);
});


rl.on("close", () => {
  const x = parseInt(lines[0]);
  const y = parseInt(lines[1]);
  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else {
    console.log(4);
  }
});
