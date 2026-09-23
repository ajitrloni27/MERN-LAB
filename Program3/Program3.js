let a = prompt("Enter a string:");
console.log("Entered String is :" +a);

console.log("Length of Entered String:"+a.length);
let text = "I am learning JavaScript programming.";
let word = text.substring(13, 24);

console.log("Extracted word:"+ word);
console.log("String brfore Replace : "+text);

let newString = text.replace("JavaScript", "Python");
console.log("String after replacing:" +newString);

function isPalindrome(a) {
    let reverse = a.split("").reverse().join("");
    return a === reverse;
}

let input = prompt("Enter a word to check palindrome:");

console.log("Is Palindrome : "+ isPalindrome(input));
