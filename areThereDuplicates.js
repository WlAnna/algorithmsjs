// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in .You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

// Frequency Counter solution
function areThereDuplicates() {
    let args = Array.from(arguments)
    let frequencyCount = {}
    for (let val of args) {
        frequencyCount[val] = (frequencyCount[val] || 0) + 1;
    }

    for (let key in frequencyCount) {
        if (frequencyCount[key] > 1) {
            return true
        }
    }

    return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true

//Multiple Pointers solution
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

//One liner solution
function areThereDuplicates() {
    console.log(new Set(arguments))
    return new Set(arguments).size !== arguments.length;
}