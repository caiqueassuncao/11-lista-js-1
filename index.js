/**** Escreva o código abaixo 👇******/
function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  } else {
    return a / b;
  }
}


function calcularMedia(n1, n2, n3, n4) {
  const soma = n1 + n2 + n3 + n4

  const media = dividir(soma, 4)

  return media
}

function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

function calcularAreaRetangulo(base, altura) {
  return base * altura;
}

function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "par" : "ímpar"; 
}

function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}

function calcularHipotenusa(cateto1, cateto2) {
  return Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
}
/**** Escreva o código acima ☝️******/


//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};