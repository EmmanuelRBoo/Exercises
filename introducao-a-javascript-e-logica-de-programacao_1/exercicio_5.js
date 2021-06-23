let a = 60;
let b = 60;
let c = 60;
let isDeg;

const deg = a + b + c;


if(deg === 180)
  isDeg = true;
else if(deg < 0 || deg > 360)
  isDeg = "Erro! Para ser um ângulo deve estar entre 0° e 360° e para ser um triângulo deve ter exatamente 180°!!";
else
  isDeg = false

console.log(isDeg)