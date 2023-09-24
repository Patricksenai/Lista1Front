function desvio1() {
    alert("EX1");
    let num = prompt("Digite um numero ")


    if (num % 2 == 0) {
        console.log("o numero é par")
    } else {
        console.log("o numero é impar")
    }

}

function desvio2() {
    let num1 = prompt("digite um número");
    let num2 = prompt("Digite outro número")
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (num1 > num2) {
        console.log("O maior numero é " + num1);
    } else {
        console.log("O maior numero é " + num2)
    }

}

function desvio3() {
    let gestante = prompt("Vocé é gestante ? digite S para sim e N para não").toLowerCase;
    if (gestante == "sim") {
        console.log("Vá para a fila preferencial");
    } else {
        let idoso = prompt("Você é maior de 65 anos ? digite S para sim e N para não").toLowerCase;

        if (idoso = "sim") {
            console.log("Vá para a fila preferencial");
        } else {
            let pcd = prompt("Você tem alguma deficiência ? digite S para sim e N para não ").toLowerCase;

            if (pcd = "sim") {
                prompt("Vá para a fila preferencial");
            } else {
                console.log("Vá para fila normal")

            }
        }
    }



    function desvio4() {
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
}






function desvio5() {
    let logindigitado = prompt(" Digite seu login");
    let login = "Patrick123"
    let senhadigitada = prompt("Digite sua senha");
    let senha = "1234"

    if (logindigitado == login && senha == senhadigitada) {
        console.log("logado com sucesso")
    } else if (login != logindigitado) {
        console.log("Login invalido")
        desvio5();
    } else if (senha != senhadigitada) {
        console.log("senha invalida")
        desvio5();
    } else if (logindigitado != login && senha != senhadigitada) {
        console.log(" login e senha invalida")
        desvio5();
    } else {

    }

}

function desvio6() {
    let pergunta01;
    let pergunta02;
    let pergunta03;
    let respostaErrada = 3;

    //pergunta 01
    pergunta01 = prompt("Quantas cores tem a bandeira do Brasil? \n Digite (1): 2 cores \n Digite (2): 4 cores  \n Digite (3): 3 cores \n Digite (4): Nenhuma das anteriores")
    if (pergunta01 == 2) {

        alert("resposta correta!!")
    } else {
        respostaErrada--
        alert("Resposta incorreta!!")
    }

    //Pergunta 02
    pergunta02 = prompt("Qual maior estado do Brasil? \n Digite (1): amazonas \n Digite (2): Pará \n Digite (3): Minas Gerais");
    if (pergunta02 == 1) {
        alert("resposta correta!!")
    } else {
        respostaErrada--
        alert("Resposta incorreta!!")
    }

    //Pergunta 03
    pergunta03 = prompt("em que ano estamos  ? \n Digite (1): 2023 \n Digite (2): 2024 \n Digite (3): 2022");
    if (pergunta03 == 1) {
        alert(" resposta correta!!")
    } else {
        respostaErrada--
        alert("Resposta incorreta!!")
    }


    if (respostaErrada == 3) {
        alert("Parabens, você ganhou o jogo com 3 perguntas respondidas corretamente!!")
    } else if (respostaErrada == 0) {
        alert("Você perdeu o jogo com 3 respostas incorretas!!")
    } else {
        alert(` voce acertou ${respostaErrada} perguntas!!`)
    }

}


desvio6();

