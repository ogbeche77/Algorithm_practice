const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on ('line', (line)=>{
    var nums = line.split(' ');
    var guests = 0;
var beds = 0;
var bookings = [];
var processed = 0;
    if(guests === 0 || beds === 0) {
        guests = nums[0];
        beds = nums[1];
        console.log('Number of kittens: ' + guests);
        console.log('Number of beds: ' + beds);
    } 

  if (processed < guests) {
      var nums = line.split(' ');
      var A = parseInt(nums[0]);
      var B = parseInt(nums[1]);
      var booking = Array.from(new Array(A-B));
      bookings.push(booking);
  }

  console.log(bookings);
});
  


