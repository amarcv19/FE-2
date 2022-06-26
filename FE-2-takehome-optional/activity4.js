function createNumeronym(word){
  let n = word.length;

  if(n < 4)
    return word;
  
  let ans = word[0];
  ans = ans.concat(n-2);
  ans = ans.concat(word[n-1]);
  return ans;
  
}

function maskSentence(sentence){
  
  // split the sentence
  const arr = sentence.split(" ");

  // iterate through the array
  // call createNumeronym method for each element
  const newarr = arr.map(e=>{
    return createNumeronym(e.trim());
  });
  // append the result to new array

  // join the new array 
  let result = newarr.join(" ");

  // print the resultant string to the console
  console.log(result);
}

maskSentence('Kubernetes docker json python java javascript is great node bla ruh kha react');
