// Strings
let nome = "Maria"
let sobrenome = 'Duarte'
let profissao = "Médica"
let saudacao = "A "+ nome + " é " + profissao
let nomecompleto = nome + " " +  sobrenome

console.log(nome)
console.log(saudacao)
console.log(`Bem vinda, ${nome} ${sobrenome}`)
console.log (nomecompleto)

// Number
let idade = 29
let aniversario = "8"
let temperatura = 36.5

let soma = 29 + 1
console.log(soma)

let subtracao = 2- 1
console.log(subtracao)

let multiplicacao = 2 * 2
console.log(multiplicacao)

let divisao = 10/2
console.log(divisao)

// Boolean
let estaChovendo = false
let estaSol = true

console.log(estaChovendo)
console.log(estaSol)

// Array

// Para criar um array[]
let frutas = ["Abacaxi", "Laranja", "Melancia", "Maça"]

// Adicionar no final do array
frutas.push("Uva")

// Remover o primeiro elemento
frutas.shift()

//Remover o ultimo elemento
frutas.pop()
console.log(frutas.length)

let numeros = ["1", "2", "3", "4", "5", "6"]
      // index  0    1    2    3    4    5  
      numeros.shift()
      numeros.shift()
      numeros.pop()
      numeros.pop()
      numeros.push("6, 7")
      
      numeros[0] = 20

      console.log(numeros)  


    // objeto
let pessoa = {
    nome: "João",
    sobrenome: "Duarte",
    idade: 28,
    estrangeiro: false,
    linguagens: ["java", "Go", "Python", "Cobol", "C#"]
}

console.log(`Nome: ${pessoa.nome}`)
console.log(`Sobrenome: ${pessoa.sobrenome}`)
console.log(`Idade: ${pessoa.idade}`)

//Adicionando uma nova propriedade
pessoa.profissao = "Desenvolvedor"

// Alterar a propriedade
pessoa.idade = 27

console.log(pessoa)

let carro = {
    marca: "Fiat",
    modelo: "Argo",
    ano: "2023",
}

// Deleta propriedade
delete pessoa.linguagens

let carros = [
    {marca: "Toyota", modelo: "Corolla"},
    {marca: "Honda", modelo: "Civic"},
    {marca: "Fiat", modelo: "Uno"}
]


console.log(carros[2].modelo)






