let peca = "rei";

switch(peca){
  case "peão":
    console.log("No primeiro movimento ela pode andar duas casas para frente e depois disso apenas uma");
    break;
  case "torre":
    console.log("Ela pode andar para cima, baixo e lados por quantas casa der");
    break;
  case "cavalo":
    console.log("Ele anda em L(3 casas retas e uma para algum lado)")
    break;
  case "rainha":
    console.log("Ela pode se movimentar em qualquer direção");
    break;
  case "rei":
    console.log("Ele pode andar apenas uma casa para qualquer direção");
    break;
  default:
    console.log("Não existe esta peça");
    break;
}

console.log(peca.toLowerCase());