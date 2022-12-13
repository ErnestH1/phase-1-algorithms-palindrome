function reverse(word){
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")

  return reversedWord
}

function isPalindrome(word) {
  // Write your algorithm here
const reversedWord = reverse(word)
if (word === reversedWord){
  return true
}
else{
  return false
}
}

/* 
  Add your pseudocode here
*/
/*
//testing if the word is a palindrome ,the functions retruns either true or false
// when the word is reversed and is the same as the original word retuns true 
// else return false
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;
