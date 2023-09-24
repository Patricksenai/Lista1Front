function laços1() {
    let numeroDigitado;

    numeroDigitado = prompt("Escreva um numero para início do crõnometro (de 1 a 59): ")

    while ((numeroDigitado > 59) || (numeroDigitado == 0)) {
        alert("Digite um número válido!!")
        numeroDigitado = prompt("Escreva um numero: ")
    }

    for (let i = 0; i <= numeroDigitado; i++) {
        console.log(i)
    }

}
function laços2() {
    let numeroDigitado;
    let resultado;

    numeroDigitado = prompt("Escreva um número que deseja descobrir a tabuda:")

    for (i = 1; i <= 10; i++) {
        resultado = i * numeroDigitado;
        console.log(`${numeroDigitado} X ${i} = ${resultado}`)
    }


}

function laços3() {
    let num1;
    let num2;

    num1 = parseInt(prompt("Digite o primeiro número: "))
    num2 = parseInt(prompt("Digite o segundo número: "))

    console.log(`Os números pares entre ${num1} e ${num2} são: `)

    for (i = num1; i < num2; i++) {
        if (i % 2 == 0 && i != num1) {
            console.log(i)
        }
    }

}

function laços4() {
    let idade = prompt("Digite sua idade ")
    idade = parseInt(idade)

    if (idade < 16) {
        console.log(" não pode entrar")
    } else if (idade <= 16 && idade >= 18) {
        console.log(" Entrada somente com responsaveis ")
    } else {
        console.log(" Entrada liberada")
    }
}

function laços5(){
    let logindigitado = prompt(" Digite seu login");
    let login = "Patrick123"
    let senhadigitada = prompt("Digite sua senha");
    let senha = "1234"
    let tentativas = 1;

do {
    if ((logindigitado == login) && (senha == senhadigitada)) {
        console.log("logado com sucesso")
    } else{
        tentativas++;
       if (login != logindigitado) {
        console.log("Login invalido")
        logindigitado = prompt(" Digite seu login");
        senhadigitada = prompt("Digite sua senha");

    } else if (senha != senhadigitada) {
        console.log("senha invalida")
        logindigitado = prompt(" Digite seu login");
        senhadigitada = prompt("Digite sua senha");
        
    } else {
        alert(" login e senha invalida")
        logindigitado = prompt(" Digite seu login");
        senhadigitada = prompt("Digite sua senha");
    }
}
}while (tentativas < 3)

if (tentativas==3)
alert ( "Acesso Bloqueado")
}

        
   




laços3();