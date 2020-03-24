const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var R1 = parseInt(nums[0]);
    var S = parseInt(nums[1]);
    /*Solve the test case and output the answer*/
    var R2 = 2*S - R1
    console.log(R2)
});


