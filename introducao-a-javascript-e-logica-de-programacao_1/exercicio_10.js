let custo = 10;
let venda = 100;
let total = custo + (custo / 5);
let lucro = venda - total;

if(custo < 0)
  console.log("Erro");
if(venda < 0)
  console.log("Erro");
if(total < 0)
  console.log("Erro");
if(lucro < 0)
  console.log("Erro");


console.log("O lucro da empresa foi de:", lucro * 1000);