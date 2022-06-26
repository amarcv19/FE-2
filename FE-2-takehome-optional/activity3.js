function maskPalindrome(sentence)
{
  
  // split the sentence using spaces
  const arr = sentence.split(" ");

  // iterate through the array
  // check each element if it is palindrome replace by asterisk else do nothing
  for(let i = 0;i<arr.length;i++){

    if(isPalindrome(arr[i].trim()))
    {
      let n = arr[i].trim().length;

      const a = [];
      for(let k = 0;k<n;k++)
        a.push('*');
      arr[i] = a.join("");
    }
  }
  // join the array 

  const result = arr.join(" ");

  // print the resulting string to the console
  console.log(result);
  
}



// returns true , if word is a palindrome
// false if not 
function isPalindrome(word){

  let flag = true;

  let i = 0;
  let j = word.length-1;

  while(i < j)
  {
    if(word[i] !== word[j])
    {
      flag = false;
      break;
    }
    i++;
    j--;
  }

  return flag;

}

maskPalindrome('this mom is a dad   or xor racecar');

