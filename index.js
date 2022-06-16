function isPalindrome(word) {
  // converts every non alpahnumeric characters
  const re=/[\W_]/g;

// LOWWord converts any string passsed to lowercase and any non non alpahnumeric function is replaced with no space
  const lowWord=word.toLowerCase().replace(re,"");
  // checks the reverse of word is after spliting each character and later join 
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
