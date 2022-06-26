let names = ['Anil','Dhoni','Kohli','Aaron','Ajinkya'];


const newArr = names.filter((name)=>{
  if(name.charAt(0) === 'A')
    return true;
});

console.log(newArr);