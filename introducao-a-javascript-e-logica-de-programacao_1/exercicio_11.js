
let bruto = 4000;

if(bruto >= 5189.82){
  inss = 570.88;
}else if(bruto >= 2594.93 && bruto < 5189.82){
  inss = bruto * 11 / 100;
}else if(bruto >= 1556.95 && bruto < 2594.93){
  inss = bruto * 9 / 100;
}else{
  inss = bruto * 8 / 100;
}

salario = bruto - inss;

if(salario >= 4664.68){
  aliquota = salario * 27.5 / 100;
  ir = aliquota - 869.36
}else if (salario >= 3751.06 && salario < 4664.68){
  aliquota = salario * 22.5/ 100;
  ir = aliquota - 636.13;
}else if (salario >= 2826.66 && salario < 3751.05){
  aliquota = salario * 15 / 100;
  ir = aliquota - 354.80;
}else if (salario >= 1903.99 && salario < 2826.65){
  aliquota = salario * 7.5 / 100;
  ir = aliquota -142.80;
}else{
  ir = 0;
} 

let liquido = salario - ir; 
console.log(liquido);