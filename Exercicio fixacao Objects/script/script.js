// QUESTÃO 01 
console.log("QUESTÃO 01");

const aluno = {
  nome: "Mariana",
  idade: 21,
  curso: "Sistemas de Informação"
};

console.log(aluno.nome);
console.log(aluno["idade"]);

const chave = "curso";
console.log(aluno[chave]);

aluno.idade = 22;
console.log(aluno);

//QUESTÃO 2
console.log("QUESTÃO 02");

const produto = {
  nome: "Notebook",
  preco: 3500,
  estoque: 10
};

produto.categoria = "Informática";
produto.estoque = 8;
delete produto.estoque;
produto.desconto = 15;
console.log(produto);

//QUESTÃO 3
console.log("QUESTÃO 03");

const usuario = {
  nome: "Carlos",
  email: "carlos@email.com",
  idade: 30
};

if (Object.hasOwn(usuario, "email")) {
  console.log("tem email");
}

if ("telefone" in usuario) {
  console.log("tem telefone");
} else {
  console.log("nao tem telefone");
}

if (Object.hasOwn(usuario, "idade")) {
  console.log("tem idade");
}

console.log(Object.hasOwn(usuario, "email"));
console.log("email" in usuario);
console.log(Object.hasOwn(usuario, "toString"));
console.log("toString" in usuario);

//QUESTAO 4
console.log("QUESTÃO 04");

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024,
  cor: "preto"
};

console.log(Object.keys(carro));

console.log(Object.values(carro));

let lista = Object.entries(carro);

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i][0] + ": " + lista[i][1]);
}

// QUESTÃO 5
console.log("QUESTÃO 05");

const produto5 = {
  nome: "Teclado",
  preco: 250,
  quantidade: 4
};

function calcularTotal(objeto) {
  objeto.total = objeto.preco * objeto.quantidade;
  return objeto.total;
}

calcularTotal(produto5);

console.log("total: " + produto5.total);

//QUESTÃO 6
console.log("QUESTÃO 06");

const funcionario = {
  nome: "Ana",
  cargo: "Desenvolvedora",
  endereco: {
    cidade: "Nova Friburgo",
    estado: "RJ",
    cep: "28600-000"
  }
};

console.log(funcionario.endereco.cidade);
console.log(funcionario.endereco.estado);
console.log(funcionario.endereco.cep);

funcionario.endereco.cidade = "Rio de Janeiro";

console.log(funcionario.endereco.cidade);
console.log(funcionario.contato?.telefone);

//QUESTÃO 7
console.log("QUESTÃO 07");

const conta = {
  titular: "João",
  saldo: 1500
};

conta.depositar = function(valor) {
  this.saldo += valor;
};

conta.consultarSaldo = function() {
  console.log("Saldo atual: " + this.saldo);
};

conta.sacar = function(valor) {
  if (valor > this.saldo) {
    console.log("Saldo insuficiente");
  } else {
    this.saldo -= valor;
  }
};

conta.depositar(500);
conta.consultarSaldo();

conta.sacar(2500);
conta.sacar(300);
conta.consultarSaldo();

//QUESTÃO 8
console.log("QUESTÃO 08");

const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 9.2 },
  { nome: "Daniel", nota: 7.0 }
];

let nomes = alunos.map(function(aluno) {
  return aluno.nome;
});
console.log(nomes);

let aprovados = alunos.filter(function(aluno) {
  return aluno.nota >= 7;
});
console.log(aprovados);

let maiorNota = alunos.reduce(function(maior, atual) {
  return atual.nota > maior.nota ? atual : maior;
});
let melhorAluno = alunos.find(function(aluno) {
  return aluno.nota === maiorNota.nota;
});
console.log(melhorAluno);

let soma = alunos.reduce(function(acc, aluno) {
  return acc + aluno.nota;
}, 0);
let media = soma / alunos.length;
console.log(media);

let ordenados = [...alunos].sort(function(a, b) {
  return b.nota - a.nota;
});
console.log(ordenados);

//QUESTÃO 9
console.log("QUESTÃO 09");

const dadosPessoais = {
  nome: "Marina",
  idade: 28
};

const dadosProfissionais = {
  cargo: "Analista",
  salario: 4500
};

const pessoa = {
  ...dadosPessoais,
  ...dadosProfissionais
};

pessoa.resumo = pessoa.nome + " tem " + pessoa.idade + " anos, trabalha como " + pessoa.cargo + " e ganha R$ " + pessoa.salario;

console.log(pessoa);
console.log(dadosPessoais);
console.log(dadosProfissionais);

//QUESTÃO 10
console.log("QUESTÃO 10");

const produtos = [
  { id: 1, nome: "Notebook", categoria: "Informática", preco: 3500, estoque: 4 },
  { id: 2, nome: "Mouse", categoria: "Informática", preco: 120, estoque: 15 },
  { id: 3, nome: "Cadeira", categoria: "Móveis", preco: 900, estoque: 6 },
  { id: 4, nome: "Teclado", categoria: "Informática", preco: 250, estoque: 10 }
];

function listarNomes(lista) {
  return lista.map(function(item) {
    return item.nome;
  });
}

function calcularEstoquePorProduto(lista) {
  return lista.map(function(item) {
    return {
      ...item,
      valorTotalEstoque: item.preco * item.estoque
    };
  });
}

function calcularEstoqueGeral(lista) {
  return lista.reduce(function(total, item) {
    return total + (item.preco * item.estoque);
  }, 0);
}

function pegarMaisCaro(lista) {
  return lista.reduce(function(maior, atual) {
    if (atual.preco > maior.preco) {
      return atual;
    }
    return maior;
  });
}

function filtrarPorCategoria(lista, cat) {
  return lista.filter(function(item) {
    return item.categoria === cat;
  });
}

function buscarPorId(lista, idBuscado) {
  return lista.find(function(item) {
    return item.id === idBuscado;
  });
}

function gerarResumo(lista) {
  let objResumo = {
    quantidadeProdutos: lista.length,
    valorTotalEstoque: calcularEstoqueGeral(lista)
  };
  
  let chaves = Object.keys(objResumo);
  for (let i = 0; i < chaves.length; i++) {
    console.log(chaves[i] + ": " + objResumo[chaves[i]]);
  }
  
  return objResumo;
}

console.log(listarNomes(produtos));
console.log(calcularEstoquePorProduto(produtos));
console.log(calcularEstoqueGeral(produtos));
console.log(pegarMaisCaro(produtos));
console.log(filtrarPorCategoria(produtos, "Informática"));
console.log(buscarPorId(produtos, 3));
gerarResumo(produtos);