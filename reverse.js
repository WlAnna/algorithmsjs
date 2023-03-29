// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
    if (str.length <= 0) return str;

    return reverse(str.slice(1)) + str[0];
    // return str[0] + reverse(str.slice(1))

}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'