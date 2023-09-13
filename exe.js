function ex1() {
    alert("Ex 1")
    let num1 = prompt("digite o primeiro numero");
    let num2 = prompt("Digite o segundo numero");

    // conversão de string para inteiro
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    soma = num1 + num2;
    alert(" a soma dos números é =" + soma);
}

function ex2() {
    alert("Ex 2");
    let primeironome = prompt("Digite seu primeiro nome");
    let sobrenome = prompt("Digite seu sobrenome");
    alert("Olá, " + primeironome + " " + sobrenome)
}

function ex3 (){
    alert ("Ex 3")
    let real = prompt ("Digite o valor em R$: ");
    // conversão para float 
    real = parseFloat (real);
    let dolar = real/4.95;
    alert ("A conversão de R$ : " + real + " É igual a $ " + dolar)


}

function ex4 (){
    alert ("Ex 4 ");
    let num = prompt (" Digite um valor ");
    num = parseInt(num);
    sucessor = num + 1;
    antecessor = num - 1;
    alert (`O numero antecessor a ${num}  é  ${antecessor}  e o sucessor é  ${sucessor}`)

}

function ex5 (){
    alert ("Ex 5");
    let valormetro = prompt (" Digite o valor do metro do terreno ");
    valormetro = parseFloat(valormetro);

    // faz o calculo da  aréa
    let comprimento = prompt(" Digite o comprimento do terreno ");
    comprimento = parseFloat (comprimento);
    let largura = prompt(" Digite a largura do terreno ");
    largura = parseFloat (largura);
     let area = comprimento * largura;
    let valorterreno = area * valormetro;
    alert (" o valor do terreno é R$: " + valorterreno)

}

function ex6 (){
    alert (" Ex 6")
    // recebe os dados de KM e combustivel 
    let distanciakm = prompt(" Digite  a distancia em KM ");
    distanciakm = parseFloat (distanciakm);
    let combustivelgasto = prompt ("Digte o valor gasto em combustivel");
    combustivelgasto = parseFloat (combustivelgasto);
    consumomedio = distanciakm / combustivelgasto;
    alert (" O consumo foi de " + consumomedio + " KM/L ")

}

function ex7() {
    alert("Ex 7")
    let num1 = prompt("digite o primeiro numero");
    let num2 = prompt("Digite o segundo numero");

    // conversão de string para inteiro
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    soma = num1 + num2;
    subtração = num1 -num2;
    div = num1 / num2;
    mult = num1 * num2
    alert(` a soma dos números é  ${soma} a sutração é ${subtração} a divisão é ${div} e a multiplicação é ${mult} `);
}

ex6 ();