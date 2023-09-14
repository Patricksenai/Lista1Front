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
    let gestante = prompt ("Vocé é gestante ? digite S para sim e N para não" ).toLowerCase;
    if (gestante == "sim"){
        console.log ("Vá para a fila preferencial");
    } else {
    let idoso = prompt ("Você é maior de 65 anos ? digite S para sim e N para não").toLowerCase;

      if (idoso = "sim"){
        console.log ("Vá para a fila preferencial");
      } else{
    let pcd = prompt ("Você tem alguma deficiência ? digite S para sim e N para não ").toLowerCase;

     if (pcd = "sim") {
        prompt ("Vá para a fila preferencial");
      } else {
        console.log ("Vá para fila normal")

      }    
    }
}
          


function desvio4 (){
    let idade = prompt ("Digite sua idade ")
    idade = parseInt(idade)

    if (idade<16){
        console.log (" não pode entrar")
    } else if (idade <=16 && idade >=18){
        console.log (" Entrada somente com responsaveis ")
    }else{
        console.log(" Entrada liberada")
    }
}
}






function desvio5 (){
    let logindigitado = prompt(" Digite seu login");
    let login="Patrick123"
    let senhadigitada = prompt("Digite sua senha");
    let senha = "1234"
    
    if (logindigitado == login && senha == senhadigitada) {
        console.log("")
    }else if (login != logindigitado){
        console.log ("Login invalido")
    }if (senha != senhadigitada){
        console.log ("senha invalida")
    }else {
        console.log (" login e senha invalida")
    }

}

function desvio6(){
    
}


desvio5();

