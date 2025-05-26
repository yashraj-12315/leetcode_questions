
function isPalindrome(num) {
    //firstly convert the number into the string 
    let strNum = num.toString();
    //split converts into array
    if (strNum === num.toString().split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(174671))