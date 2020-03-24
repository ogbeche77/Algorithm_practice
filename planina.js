const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var x = parseInt(nums[0]);
    var S = parseInt(nums[1]);
    /*Solve the test case and output the answer*/
    for (let x += 1; x < 16; x++ )
    console.log(x);

});