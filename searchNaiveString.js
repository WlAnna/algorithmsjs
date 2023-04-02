//searchNaiveString
// Loop over longer string
// Loop over shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

function searchNaiveString(long, short) {
    let matches = 0
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                console.log(short[j], long[i + j])
                console.log('break')
                break
            }
            if (j === short.length - 1) {
                console.log('found')
                matches++
            }
        }

    }
    return matches
}


function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lo"))

console.log(searchNaiveString("lorie loled", "lo"))