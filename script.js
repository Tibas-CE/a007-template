//const nome = prompt("qual seu nome?")
//console.log(nome)
//console.log("Olá mundo")
//tudo que vem do prompt sempre vai ser uma string(texto)

let nome = prompt("Qual o seu nome?");
console.log(nome);
let idade = prompt("Qual sua idade?")
console.log(idade);

nome = Number("Jeniffer")
idade = 26
let redeSocial = "tinder"
console.log(nome);
console.log(idade);
/*console.log(nome,idade); podemos usar apenas
um console.log para imprimir mais de uma vari-
avel*/

console.log("o nome dela é", nome,
"eu conheci ela no", redeSocial,
"ela tem", idade, "anos");

let tenhoPet = true
const nomePet = "Afrodite"
//caso seja falsa o tenhoPet const nomePet = null ou undefined
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof redeSocial);
console.log(typeof tenhoPet);
console.log(typeof nomePet);

//exercicio de fixação 1

const meuAlbumFavorito = "Alucinação - Belchior"
let anoLancamento = 1976
let bomOuRuim = true

console.log("Meu album favorito", meuAlbumFavorito,
"foi lançado em", anoLancamento,"ele e bom?", bomOuRuim);

console.log(typeof meuAlbumFavorito);
console.log(typeof anoLancamento);
console.log(typeof bomOuRuim);

//exercicio de fixação 2 

let a = 30;
let b = 20;
let c;

c=a
a=b
b=c

console.log("A", a);
console.log("B", b);