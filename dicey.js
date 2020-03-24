const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.on('line', (line) => {
    var nums = line.split(' ');
    var results =[];
    const N = parseInt(nums[0], 10);
    const M = parseInt(nums[1], 10);
    var diceFaces = [N, M];
    diceFaces.sort((a,b)=>{
        return a - b;
    });
    
    for (let i = diceFaces[0] + 1; i <= diceFaces[1] + 1; i ++) {
      results.push(i);
    }

    console.log(results.join('\n'))
});
