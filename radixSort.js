// radixSort

// getDigit
// takes a num and position and returns number at that position

// function getDigit(num, place) {   // NIE DZIALA z FUNCKJA radixSort
//     let strNum = num.toString();
//     let temp = 0;
//     for (let i = strNum.length - 1; i >= 0; i--) {
//         // console.log(i, temp)
//         if (place == temp) {
//             return +strNum[i]
//         }
//         temp++
//     }
// }

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


//I revert indexes
console.log(getDigit(12345, 0)) //5
console.log(getDigit(12345, 1)) //4
console.log(getDigit(12345, 2)) //3
console.log(getDigit(12345, 3)) //2
console.log(getDigit(12345, 4)) //1

// digitCount(num)
// returns the number of digits in num

function digitCount(num) {
    let strNum = num.toString()
    return strNum.length

}

console.log(digitCount(1)) // 1
console.log(digitCount(25)) //2
console.log(digitCount(314)) // 3

// mostDigits(nums)
// Given array of numbers, returns the number of digits in the largest numbers in the list

function mostDigits(arr) {
    let maxLength = digitCount(arr[0])
    for (let i = 1; i < arr.length; i++) {
        if (digitCount(arr[i]) > maxLength) {
            maxLength = digitCount(arr[i])
        }
    }

    return maxLength
}

console.log(mostDigits([1234, 56, 7])) //4
console.log(mostDigits([1, 1, 11111, 1])) // 5
console.log(mostDigits([12, 34, 56, 78])) // 2



// Define a function that accepts list of numbers
// Figure out how many digits the largest number has
// Loop form k = 0 up to this largest number of digits
// For each iteration of the loop:
// - Create buckets for each digit (0 to 9)
// - place each number in the corresponding bucket based on its kth digit
// Replace our existing array with values in our buckets, starting with 0 and going up to 9
// return list at the end!

// function radixSort(arr) {
//     let nums = arr

//     let longest = mostDigits(arr)
//         // console.log(longest)
//     let buckets = []
//     let flatten = []
//     let rest = [...arr]
//     let re = []
//     for (let k = 0; k < longest; k++) {
//         // let bucketsIndex = getDigit(nums[k], k)
//         // console.log(nums[k], k)
//         for (let i = 0; i < nums.length; i++) {
//             let bucketIndex = getDigit(nums[i], k) // tu nie widzi krotszych liczb
//                 // if (bucketIndex == undefined) buckets[bucketIndex] = null
//                 // console.log(bucketIndex)
//                 // console.log(nums[i], k)
//             buckets[bucketIndex] = [nums[i]]
//             rest = rest.filter((el) => {
//                 if (el != nums[i]) {
//                     re.push(nums[i])
//                 }
//             })

//             // rest = rest.slice(i, 1)


//             //czy ta liczba znajduje sie w oryginalnym arraju, jesli tak to usunac. Reszte dodac na zerowy
//         }
//         console.log(buckets)
//         console.log(rest)
//         console.log(re)
//             // console.log(buckets)
//         for (let j = 0; j < buckets.length; j++) {
//             if (buckets[j] == undefined) continue
//             flatten = flatten.concat(buckets[j])
//             nums = flatten

//         }
//         console.log(buckets)
//         console.log(flatten)
//         flatten = []
//         buckets = []

//         // console.log(nums)



//     }

//     // console.log(flatten)
//     // console.log(nums)
//     return buckets
// }




// console.log(radixSort([2, 9, 98, 776, 3]))

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    console.log(maxDigitCount)
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            console.log(typeof digit)
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))