let primo = 10;
let num = []

for(let i = 0; i < primo+1; i += 1){
  num.push(i)
  for(let i = 0; i < num.length; i += 1){
    if(num[i]/2 != 0 || num[i]/3 != 0){
      console.log("Não é primo");
    }else{
      console.log(primo + " é primo");
      break;
    }
  }
}
