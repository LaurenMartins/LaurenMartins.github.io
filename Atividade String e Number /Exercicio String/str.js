//questão 1: Padronização de nome

let btn1 = document.getElementById("btn1");

btn1.onclick = function () {
    let input1 = document.getElementById("input1");
    let texto01 = input1.value;

    let textoResultado1 = texto01.trim().toLowerCase();

    let resultado1 = document.getElementById("resultado1");
    resultado1.textContent = textoResultado1;
}

//questão 2: verificar email

let btn2 = document.getElementById("btn2");

btn2.onclick = function () {
    let input2 = document.getElementById("input2");
    let texto02 = input2.value;

    let textoResultado2 = " ";
    if(texto02.endsWith("@exemplo.com")){
        textoResultado2 = "E-mail válido"
    }else{
        textoResultado2 = "E-mail inválido"
    }
    
    let resultado2 = document.getElementById("resultado2");
    resultado2.textContent = textoResultado2;
}

//questão 3:

let btn3 = document.getElementById("btn3");

btn3.onclick = function() {
    let input3 = document.getElementById("input3");
    let texto03 = input3.value;

    let textoResultado3 = texto03.length;
    let textoResultaSemEspaço = texto03.replaceAll(" ", "").length

    let resultado3 = document.getElementById("resultado3");
    let resultadoSemEspaco = document.getElementById("resultado3semespaco");

    resultado3.textContent = "Total: "+ textoResultado3;
    resultadoSemEspaco.textContent = "Total sem espaço: " + textoResultaSemEspaço;
}

//questão 4

let btn4 = document.getElementById("btn4");

btn4.onclick = function () {
    let input4 = document.getElementById("input4");
    let texto04 = input4.value;

    let textoResultado4 = " ";
    if(texto04.includes("JavaScript")){
        textoResultado4 = "A mensagem contém JavaScript."
    }else{
        textoResultado4 = "A mensagem não contém JavaScript."
    }


    let resultado4 = document.getElementById("resultado4");
    resultado4.textContent = textoResultado4;
}

//questão 5

let btn5 = document.getElementById("btn5");

btn5.onclick = function () {
    let input5 = document.getElementById("input5");
    let texto05 = input5.value;

    let dominio = texto05.indexOf('@');
    let textoResultado5 = texto05.slice(0, dominio);
    
    let resultado5 = document.getElementById("resultado5");
    resultado5.textContent = textoResultado5;
}

//questao 6

let btn6 = document.getElementById("btn6");

btn6.onclick = function () {
    let input6 = document.getElementById("input6");
    let texto06 = input6.value;

    //let textoResultado6 = texto06.replaceAll("João", "Maria") ;

    let textoResultado6 = texto06.replace(/João/g , "Maria") ;
    
    let resultado6 = document.getElementById("resultado6");
    resultado6.textContent = textoResultado6;
}

//questao 7

let btn7 = document.getElementById("btn7");

btn7.onclick = function () {
    let input7 = document.getElementById("input7");
    let texto07 = input7.value;

    let textoResultado7 = texto07.slice(0, 3).toUpperCase() + "-" + texto07.slice(3);
    
    let resultado7 = document.getElementById("resultado7");
    resultado7.textContent = textoResultado7;
}

//questao 8

function inverterString(){
    let input8 = document.getElementById("input8");
    let texto8 = input8.value;


    let array8 = texto8.split("");
    let arrayinvertida = array8.reverse();
    let textoResultado8 = arrayinvertida.join("");

    let resultado8 = document.getElementById("resultado8");
    resultado8.textContent = textoResultado8;
}

let btn8 = document.getElementById("btn8");

btn8.onclick = inverterString;

//questao 9

function verificaSenha() {
    let input9 = document.getElementById("input9");
    let texto9 = input9.value;

    let boolean9 = false;
    if(texto9.length >= 8 && /[A-Z]/.test(texto9) && /[a-z]/.test(texto9) && /[0-9]/.test(texto9))
    {
        boolean9 = true;
    }
    let resultado9 = document.getElementById("resultado9");
    resultado9.textContent = boolean9;
}

let btn9 = document.getElementById("btn9");

btn9.onclick = verificaSenha;

//questao 10

function formatarNome(){
    let input10 = document.getElementById("input10");
    let texto10 = input10.value;

    let resultado10 = texto10.trim()
}