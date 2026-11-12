//QUESTAO 01
const frutas = ["maçã", "banana", "laranja"];
frutas.push("uva");
frutas.unshift("abacaxi");
frutas.pop();
frutas.shift();
console.log(frutas);

//QUESTAO 02
const numeros = [10, 20, 30, 40, 50, 60];
let parte = numeros.slice(2, 5);
console.log(parte);

//QUESTAO 03
const cores = ["azul", "verde", "amarelo", "vermelho"];
cores.splice(1, 2, "roxo", "laranja");
cores.splice(1, 0, "preto");
console.log(cores);

//QUESTAO 04
const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["Node.js", "Python", "Java"];
let tecnologias = frontEnd.concat(backEnd);
console.log(tecnologias);

//QUESTAO 05
const palavras = ["JavaScript", "é", "uma", "linguagem", "poderosa"];
let frase = palavras.join(" ");
console.log(frase);

//QUESTAO 06
const linguagens = ["JavaScript", "Python", "Java", "C#"];
function temLinguagem(nome) {
  return linguagens.includes(nome);
}
console.log(temLinguagem("Python"));
console.log(temLinguagem("Ruby"));

function temLinguagemDesafio(nome) {
  return linguagens.map(l => l.toLowerCase()).includes(nome.toLowerCase());
}
console.log(temLinguagemDesafio("python"));

//QUESTAO 07
const nomes = ["Ana", "Bruno", "Carlos", "Ana", "Daniel"];
console.log(nomes.indexOf("Ana"));
console.log(nomes.lastIndexOf("Ana"));
console.log(nomes.indexOf("Marcos"));

//QUESTAO 08
const produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];
produtos.forEach((p, i) => {
  console.log(i + " - " + p);
});

//QUESTAO 09
const precos = [100, 250, 80, 320, 150];
let comDesconto = precos.map(p => p * 0.9);
console.log(comDesconto);

//QUESTAO 10
const nums10 = [3, 8, 11, 14, 21, 26, 30, 35];
let pares = nums10.filter(n => n % 2 === 0);
console.log(pares);

//QUESTAO 11
const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 9.2 },
  { nome: "Daniel", nota: 7.5 }
];
let alunoTop = alunos.find(a => a.nota >= 9);
console.log(alunoTop);

//QUESTAO 12
const listaProdutos = [
  { id: 101, nome: "Notebook" },
  { id: 205, nome: "Mouse" },
  { id: 310, nome: "Teclado" },
  { id: 450, nome: "Monitor" }
];
function buscarIndice(id) {
  return listaProdutos.findIndex(item => item.id === id);
}
console.log(buscarIndice(310));
console.log(buscarIndice(999));

//QUESTAO 13
const notas = [5.5, 6.0, 7.2, 8.0, 9.5];
console.log(notas.some(n => n >= 9));
console.log(notas.some(n => n < 6));

//QUESTAO 14
const idades = [22, 31, 19, 27, 40];
console.log(idades.every(i => i >= 18));
const idades2 = [22, 17, 19, 27, 40];
console.log(idades2.every(i => i >= 18));

//QUESTAO 15
const precosCompra = [29.90, 49.90, 15.50, 100.00];
let total = precosCompra.reduce((acc, val) => acc + val, 0);
console.log(total.toFixed(2));

const carrinho = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 120.5 }
];
let totalObj = carrinho.reduce((acc, item) => acc + item.preco, 0);
console.log(totalObj);

//QUESTAO 16
const nums16 = [100, 8, 25, 3, 45, 12];
let cresc = [...nums16].sort((a, b) => a - b);
let decresc = [...nums16].sort((a, b) => b - a);
console.log(cresc);
console.log(decresc);
console.log("Sem função o sort transforma os itens em string e compara pela tabela unicode, aí 100 vem antes de 8");

//QUESTAO 17
const fila = ["Ana", "Bruno", "Carlos", "Daniel"];
let filaInvertida = fila.slice().reverse();
console.log(filaInvertida);
console.log("O reverse altera o array original direto na memória (in-place), então precisa copiar antes com slice");

//QUESTAO 18
const categorias = [
  ["HTML", "CSS"],
  ["JavaScript", "TypeScript"],
  ["Node.js", "Express"]
];
console.log(categorias.flat());

const tresNiveis = [1, [2, [3, 4]]];
console.log(tresNiveis.flat(2));

//QUESTAO 19
const turmas = [
  { nome: "Turma A", alunos: ["Ana", "Bruno"] },
  { nome: "Turma B", alunos: ["Carlos", "Daniel", "Eva"] }
];
let todosAlunos = turmas.flatMap(t => t.alunos);
console.log(todosAlunos);

let alunosComTurma = turmas.flatMap(t => t.alunos.map(nome => ({ nome, turma: t.nome })));
console.log(alunosComTurma);

//QUESTAO 20
const vendas = [
  { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
  { produto: "Mouse", categoria: "Informática", valor: 120, quantidade: 5 },
  { produto: "Cadeira", categoria: "Móveis", valor: 900, quantidade: 3 },
  { produto: "Teclado", categoria: "Informática", valor: 250, quantidade: 4 },
  { produto: "Mesa", categoria: "Móveis", valor: 1200, quantidade: 1 }
];

let infoVendas = vendas
  .filter(v => v.categoria === "Informática")
  .map(v => ({ ...v, total: v.valor * v.quantidade }));

let faturamentoTotal = infoVendas.reduce((soma, v) => soma + v.total, 0);
let maiorVenda = [...infoVendas].sort((a, b) => b.total - a.total)[0];
let nomesProdutos = infoVendas.map(v => v.produto);

console.log(infoVendas);
console.log(faturamentoTotal);
console.log(maiorVenda.produto);
console.log(nomesProdutos);