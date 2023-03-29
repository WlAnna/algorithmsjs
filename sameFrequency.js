// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(num1, num2) {
    let str1 = num1.toString()
    let str2 = num2.toString()

    if (str1.length != str2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {}

    for (let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }

    for (let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }

    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter1[key] != frequencyCounter2[key]) {
            return false
        }
    }

    return true
}


console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false