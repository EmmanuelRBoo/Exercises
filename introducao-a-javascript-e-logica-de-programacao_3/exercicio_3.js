let n = 5;
let star = [];
let blank = [];



for(let index = 0; index < n; index += 1){
  blank.push(" ");
}
for(let index = 0; index < n; index += 1){
  star.push("*");
  blank.pop();
  console.log(blank.join('') + star.join(''));
}

