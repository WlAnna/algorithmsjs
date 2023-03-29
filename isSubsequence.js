// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
    if (str1.length == 0 || str1.length > str2.length) return false;
    let i = 0;
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] == str2[j]) {
            i++;
        }
    }

    if (i == str1.length) {
        return true;
    }

    return false;
}



console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)