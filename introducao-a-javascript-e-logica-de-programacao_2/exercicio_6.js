let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let even = [];

for(let i = 0; i < numbers.length; i += 1){
  if(numbers[i]%2 == 1)
    even.push(numbers[i])
}

if(even.length > 1){
  console.log("Existem "+ even.length + " números ímpares")
  console.log("São eles: " + even)
}else{
  console.log("nenhum valor ímpar encontrado")
}