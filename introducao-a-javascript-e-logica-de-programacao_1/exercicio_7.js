let nota = -30;

if(nota >= 90 && nota <= 100) 
  nota = "A";
else if(nota >= 80 && nota < 90) 
  nota = "B";
else if(nota >= 70 && nota < 80) 
  nota = "C";
else if(nota >= 60 && nota < 70) 
  nota = "D"
else if(nota >= 50 && nota < 60) 
  nota = "E"; 
else if(nota > 0 && nota < 50) 
  nota = "F";
else{
  nota = "Erro, nota avaliada de forma errada";
}

console.log(nota);