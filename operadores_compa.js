let x = 10
let y = 20

// Maior que
console.log(x > y)

// Mebnor que
console.log(x < y)

// maior ou igual a
console.log(x >= y)

// menor ou igaul
console.log(x <=y )

// igual
console.log(10 == "10")

// Igualdade estrita
console.log(10 === "10")

// Diferente de
console.log(10!== 20)

// Se o sinal for verde, exiba "Pode passar"
// Se for amarelo, exiba "Atenção"
// Se for vermelho, exiba "Não pode passar"

let corSemaforo = "vermelho"



if(corSemaforo == "verde"){
    console.log("Pode passar")
}else if(corSemaforo == "amarelo"){
    console.log("Atenção")}

else
console.log("Não pode pasar")


// Verficar se um numero é positivo, negativo ou zero
// Retorna "o numnero é psostivo", ou "negativo" ou "zero"

let numero = -10

if(numero > 0){
    console.log("O numero e positivo")
} else if (numero < 0 ){
    console.log("O numero e negativo")
}

else
console.log("O numero e zero")

// Exibir a faixa etaria

let anodeNascimento = 2016

if(anodeNascimento >= 1946 && anodeNascimento <1964){
    console.log("Baby boomer")
} else if (anodeNascimento >= 1965 && anodeNascimento <= 1980){
    console.log("Geracao X")
} else if (anodeNascimento >= 1981 && anodeNascimento <= 1996){
    console.log("Millennial")
} else if (anodeNascimento >= 1997 && anodeNascimento <= 2012){
    console.log("Geracao Z")
}
else if(anodeNascimento >= 2013){
    console.log("Geração Alpha")
}

// Array
let frutas = ["Abacaxi", "Laranja", "Melancia", "maça"]



