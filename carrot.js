const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
  var nums = line.split(' ');
  var x = parseInt(nums[0]);
  var y = parseInt(nums[1]);

  var z =  y;
  console.log(z);
});