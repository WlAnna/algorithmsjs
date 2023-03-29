// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)

function averagePair(arr, val) {
    if (arr.length == 0) return false;
    let i = 0;
    let average
    for (let j = 1; j < arr.length; j++) {
        average = (arr[i] + arr[j]) / 2
        console.log(average)
        if (average == val) {
            return true;
        }
        i++;
        arr[i] = arr[j]
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false 
console.log(averagePair([], 4)) // false