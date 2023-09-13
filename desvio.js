function desvio1() {
    alert ("EX1");
    let num = prompt ("Digite um numero ")
    

    if (num%2==0) {
        console.log("o numero é par")
    } else {
        console.log("o numero é impar")
    }

}

function desvio2(){
    let num1 =  prompt ("digite um número");
    let num2 = prompt ("Digite outro número")
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (num1>num2) {
        console.log("O maior numero é " + num1);
    }else {
        console.log("O maior numero é " + num2)
    }

}

function desvio3 (){
    let gestante = prompt ("Vocé é gestante ? digite S para sim e N para não" );
    let idoso = prompt ("Você é maior de 65 anos ? digite S para sim e N para não");
    let pcd = prompt ("Você tem alguma deficiência ? digite S para sim e N para não ");

}

function desvio4(){
    let idade = prompt ("Digite sua idade ")
    idade = parseInt(idade)

    if (idade<16){
        console.log

    }
}

desvio2()