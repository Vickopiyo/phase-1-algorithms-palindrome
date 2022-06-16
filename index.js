function isPalindrome(word) {
  // Write your algorithm here
  const re=/[\W_]/g;


  const lowWord=word.toLowerCase().replace(re,"");
  const reverseWord=lowWord.split("").reverse().join("");
  if(reverseWord===lowWord){
    return true;
  }else{
    return false;
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
