console.log('xx')

function validAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
    for (let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }

    // console.log(frequencyCounter1)
    // console.log(frequencyCounter2)

    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter1[key] != frequencyCounter2[key]) {
            return false

        }
    }
    return true;
}

console.log(validAnagram('anagram', 'aaagram')); // false
console.log(validAnagram('anagram', 'anagram')); // true
console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat", "car")) // false 
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true