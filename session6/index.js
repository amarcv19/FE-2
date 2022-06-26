async function promiseLikeFunc(){
  
  const result = await fetch('https://api.kanye.rest');

  return  result.json();

  // return data;
}

async function getQuote(){

  const data = await promiseLikeFunc();

  console.log(data.quote);
  
}

getQuote();
