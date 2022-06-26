let runsScored = [20,100,53,44,21];

let newArray = [];


newArray = runsScored.map((e)=>{
  if(e>=50)
    return e;
  else 
    return 0;
});

console.log(newArray);