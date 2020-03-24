const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




function haveConflict(bookingA, bookingB) {
    var bookingAStart = bookingA[0];
    var bookingAEnd   = bookingA[bookingA.length-1]
    var bookingBStart = bookingB[0];
    var bookingBEnd   = bookingB[bookingB.length-1]
    return !(bookingAEnd < bookingBStart || bookingBEnd < bookingAStart)
}

function resolve(node, rest, additionalBeds) {
    if(rest.length != 0) {
        
        var nonConflicting = rest.filter(r => !haveConflict(node, r))
        var resolved = nonConflicting.map(r => resolve(r, nonConflicting.filter(rr => rr !== r), additionalBeds))
        
        
        var conflicting = rest.filter(r => haveConflict(node, r))
        var fixedConflicting = []
        if(additionalBeds > 0) {
            fixedConflicting = conflicting.map(r => resolve(r, rest.filter(rr => rr !== r), additionalBeds -1))
        }
        
        var allowed = nonConflicting.concat(fixedConflicting)
        return {
            value: node,
            children: allowed
        }
        
    } else {
        return {
            value: node
        }
    }
}

function treeDepth(node, depth) {
    if(node.children && node.children.length > 0) {
        var sol =  Math.max(...node.children.map(ch => treeDepth(ch, depth+1)))
        return sol
    } else {
        return depth + 1
    }
}


function findSolution(guests, beds, bookings) {
    return Math.max(...bookings
        .map(booking => resolve(booking, bookings.filter(b => b!==booking), beds - 1))
        .map(tr => treeDepth(tr, 0)))
}

async function processLineByLine() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var guests = 0;
  var beds = 0;
  var bookings = [];
  
  var processed = 0;

  for await (const line of rl) {
    if(guests === 0 || beds === 0) {
        var splitted = line.split(' ')
        guests = splitted[0];
        beds = splitted[1];
        console.log('Number of kittens: ' + guests);
        console.log('Number of beds: ' + beds)
    } else if(processed < guests) {
        var splitted = line.split(' ')
        var from = parseInt(splitted[0])
        var to = parseInt(splitted[1])
        var booking = Array.from(new Array(to-from), (x,i) => i + from)
        bookings.push(booking)
        processed += 1;
        
        if(processed >= guests) {
            console.log('Bookings: ', bookings)
            var solution = findSolution(guests, beds, bookings)
            console.log('Kittens that can be hosted: ' + solution)
        }
    }
    
  }
}

console.log('--------------------------------')

processLineByLine()