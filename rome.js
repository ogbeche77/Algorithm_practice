const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var a = parseInt(nums[0]);
    var b = parseInt(nums[1]);
    /*Solve the test case and output the answer*/
    var c = 1087.76266996.toFixed(3) * a;
    console.log(Math.round(c));
});