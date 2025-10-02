export const WorldsDataSection = [
  { id: "1", worldName: "Fundamentos" },
  { id: "2", worldName: "Estruturas de repetição" },
  { id: "3", worldName: "Condições compostas" },
  { id: "4", worldName: "Vetores (arrays)" },
  { id: "5", worldName: "Matrizes" },
  { id: "6", worldName: "Strings" },
  { id: "7", worldName: "Algoritmos intermediários" },
  { id: "8", worldName: "Estruturas avançadas" },
  { id: "9", worldName: "Algoritmos clássicos" },
  { id: "10", worldName: "Desafios avançados" },
];

export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  php: "8.2.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  typescript: "5.0.3",
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Alex';\necho $name;\n",
};

export const challenges = [
  // 🌍 Mundo 1 - Introdução
  {
    worldId: 1,
    desafio: "Soma de dois números",
    enunciado: "Leia dois números inteiros e mostre o resultado da soma.",
  },
  {
    worldId: 1,
    desafio: "Número positivo ou negativo",
    enunciado:
      "Leia um número e informe se ele é positivo, negativo ou igual a zero.",
  },
  {
    worldId: 1,
    desafio: "Maior número",
    enunciado: "Receba dois números e mostre qual é o maior deles.",
  },
  {
    worldId: 1,
    desafio: "Tabuada",
    enunciado: "Leia um número inteiro e exiba sua tabuada de 1 até 10.",
  },
  {
    worldId: 1,
    desafio: "Maioridade",
    enunciado:
      "Leia a idade de uma pessoa e informe se ela é maior ou menor de idade.",
  },
  {
    worldId: 1,
    desafio: "Par ou ímpar",
    enunciado: "Receba um número e diga se ele é par ou ímpar.",
  },
  {
    worldId: 1,
    desafio: "Menor número entre três",
    enunciado: "Leia três números e mostre o menor deles.",
  },

  // 🌍 Mundo 2 - Estruturas de repetição
  {
    worldId: 2,
    desafio: "Contagem até 100",
    enunciado: "Escreva um algoritmo que mostre todos os números de 1 até 100.",
  },
  {
    worldId: 2,
    desafio: "Números pares até 100",
    enunciado: "Mostre todos os números pares de 1 a 100.",
  },
  {
    worldId: 2,
    desafio: "Soma até N",
    enunciado:
      "Leia um número inteiro N e calcule a soma de todos os números de 1 até N.",
  },
  {
    worldId: 2,
    desafio: "Tabuada completa",
    enunciado: "Exiba a tabuada de todos os números de 1 até 10.",
  },
  {
    worldId: 2,
    desafio: "Média de 10 números",
    enunciado: "Leia 10 números fornecidos pelo usuário e mostre a média.",
  },
  {
    worldId: 2,
    desafio: "Sequência de Fibonacci",
    enunciado:
      "Leia um número inteiro N e mostre os N primeiros termos da sequência de Fibonacci.",
  },
  {
    worldId: 2,
    desafio: "Soma até zero",
    enunciado: "Leia números até que o usuário digite 0 e exiba a soma.",
  },

  // 🌍 Mundo 3 - Condições avançadas
  {
    worldId: 3,
    desafio: "Média do aluno",
    enunciado: "Leia 3 notas de um aluno e mostre se foi aprovado (média ≥ 7).",
  },
  {
    worldId: 3,
    desafio: "Reajuste salarial",
    enunciado:
      "Leia o salário de um funcionário. Se for menor que 2000, aumente em 10%, senão em 5%.",
  },
  {
    worldId: 3,
    desafio: "Ano bissexto",
    enunciado: "Verifique se um ano é bissexto.",
  },
  {
    worldId: 3,
    desafio: "Classificação de idade",
    enunciado:
      "Classifique uma pessoa em: criança (<12), adolescente (<18), adulto (<60), idoso (≥60).",
  },
  {
    worldId: 3,
    desafio: "Nota de recuperação",
    enunciado:
      "Leia duas notas. Se a média < 7, leia uma nota de recuperação e recalcule.",
  },
  {
    worldId: 3,
    desafio: "Tipos de triângulo",
    enunciado:
      "Dado três lados, verifique se formam um triângulo e qual tipo (equilátero, isósceles, escaleno).",
  },
  {
    worldId: 3,
    desafio: "Calculadora básica",
    enunciado:
      "Leia dois números e uma operação (+, -, *, /). Mostre o resultado.",
  },

  // 🌍 Mundo 4 - Vetores
  {
    worldId: 4,
    desafio: "Maior de 5 números",
    enunciado: "Leia 5 números e mostre o maior.",
  },
  {
    worldId: 4,
    desafio: "Quantidade de pares",
    enunciado: "Leia 10 números e exiba quantos são pares.",
  },
  {
    worldId: 4,
    desafio: "Vetor invertido",
    enunciado: "Leia um vetor de 10 posições e mostre em ordem inversa.",
  },
  {
    worldId: 4,
    desafio: "Soma de vetores",
    enunciado:
      "Leia dois vetores de 5 posições e crie um terceiro com a soma dos elementos.",
  },
  {
    worldId: 4,
    desafio: "Múltiplos de 3",
    enunciado: "Leia 8 números e mostre apenas os múltiplos de 3.",
  },
  {
    worldId: 4,
    desafio: "Busca em vetor",
    enunciado:
      "Leia um número e verifique se ele está presente em um vetor de 10 posições.",
  },

  // 🌍 Mundo 5 - Matrizes
  {
    worldId: 5,
    desafio: "Exibição de matriz",
    enunciado: "Leia uma matriz 3x3 e exiba todos os elementos.",
  },
  {
    worldId: 5,
    desafio: "Diagonal principal",
    enunciado:
      "Leia uma matriz 3x3 e mostre a soma dos elementos da diagonal principal.",
  },
  {
    worldId: 5,
    desafio: "Soma de pares",
    enunciado: "Leia uma matriz 3x3 e calcule a soma dos elementos pares.",
  },
  {
    worldId: 5,
    desafio: "Soma de matrizes",
    enunciado: "Leia uma matriz 2x2 e outra 2x2, e mostre a soma entre elas.",
  },
  {
    worldId: 5,
    desafio: "Transposta",
    enunciado: "Leia uma matriz 3x3 e exiba sua transposta.",
  },
  {
    worldId: 5,
    desafio: "Maior elemento",
    enunciado: "Leia uma matriz 4x4 e encontre o maior valor presente.",
  },
  {
    worldId: 5,
    desafio: "Soma das linhas",
    enunciado: "Leia uma matriz 3x3 e mostre a soma de cada linha.",
  },

  // 🌍 Mundo 6 - Strings
  {
    worldId: 6,
    desafio: "Contar vogais",
    enunciado: "Leia uma palavra e conte quantas vogais ela possui.",
  },
  {
    worldId: 6,
    desafio: "Inverter palavra",
    enunciado: "Leia uma palavra e exiba invertida.",
  },
  {
    worldId: 6,
    desafio: "Palíndromo",
    enunciado: "Verifique se uma palavra é palíndromo.",
  },
  {
    worldId: 6,
    desafio: "Quantidade de palavras",
    enunciado: "Leia uma frase e informe quantas palavras possui.",
  },
  {
    worldId: 6,
    desafio: "Substituição de caracteres",
    enunciado: "Leia uma frase e substitua todas as vogais por *.",
  },
  {
    worldId: 6,
    desafio: "Maiúsculas e minúsculas",
    enunciado: "Leia uma frase e mostre em maiúsculas e em minúsculas.",
  },
  {
    worldId: 6,
    desafio: "Contar letras",
    enunciado: "Leia uma frase e conte quantas vezes uma letra aparece.",
  },

  // 🌍 Mundo 7 - Funções
  {
    worldId: 7,
    desafio: "Função soma",
    enunciado: "Crie uma função que receba dois números e retorne a soma.",
  },
  {
    worldId: 7,
    desafio: "Função fatorial",
    enunciado: "Crie uma função que receba um número e retorne o fatorial.",
  },
  {
    worldId: 7,
    desafio: "Função primo",
    enunciado: "Crie uma função que verifique se um número é primo.",
  },
  {
    worldId: 7,
    desafio: "Função média",
    enunciado:
      "Crie uma função que receba uma lista de números e retorne a média.",
  },
  {
    worldId: 7,
    desafio: "Função máximo",
    enunciado: "Crie uma função que retorne o maior número de uma lista.",
  },
  {
    worldId: 7,
    desafio: "Função mínimo",
    enunciado: "Crie uma função que retorne o menor número de uma lista.",
  },
  {
    worldId: 7,
    desafio: "Função recursiva Fibonacci",
    enunciado: "Crie uma função recursiva que calcule Fibonacci.",
  },

  // 🌍 Mundo 8 - Objetos
  {
    worldId: 8,
    desafio: "Objeto pessoa",
    enunciado:
      "Crie um objeto representando uma pessoa com nome, idade e cidade.",
  },
  {
    worldId: 8,
    desafio: "Lista de pessoas",
    enunciado:
      "Crie uma lista de pessoas e exiba apenas as maiores de 18 anos.",
  },
  {
    worldId: 8,
    desafio: "Produto com desconto",
    enunciado: "Crie um objeto produto e uma função que calcule desconto.",
  },
  {
    worldId: 8,
    desafio: "Cadastro de alunos",
    enunciado: "Crie uma lista de alunos com notas e exiba os aprovados.",
  },
  {
    worldId: 8,
    desafio: "Contar propriedades",
    enunciado: "Crie um objeto e exiba quantas propriedades ele possui.",
  },
  {
    worldId: 8,
    desafio: "Soma de preços",
    enunciado: "Crie uma lista de produtos e calcule a soma total dos preços.",
  },
  {
    worldId: 8,
    desafio: "Maior nota",
    enunciado: "Dada uma lista de alunos, encontre o aluno com a maior nota.",
  },

  // 🌍 Mundo 9 - Algoritmos mais complexos
  {
    worldId: 9,
    desafio: "Ordenação crescente",
    enunciado: "Leia um vetor e exiba os elementos em ordem crescente.",
  },
  {
    worldId: 9,
    desafio: "Ordenação decrescente",
    enunciado: "Leia um vetor e exiba os elementos em ordem decrescente.",
  },
  {
    worldId: 9,
    desafio: "Busca linear",
    enunciado: "Leia um vetor e procure um número usando busca linear.",
  },
  {
    worldId: 9,
    desafio: "Busca binária",
    enunciado: "Implemente o algoritmo de busca binária em um vetor ordenado.",
  },
  {
    worldId: 9,
    desafio: "Matriz identidade",
    enunciado: "Gere uma matriz identidade de tamanho N.",
  },
  {
    worldId: 9,
    desafio: "Fatorial iterativo",
    enunciado: "Implemente o cálculo do fatorial de forma iterativa.",
  },
  {
    worldId: 9,
    desafio: "Soma de diagonais",
    enunciado:
      "Calcule a soma da diagonal principal e secundária de uma matriz.",
  },

  // 🌍 Mundo 10 - Desafios finais
  {
    worldId: 10,
    desafio: "Jogo da adivinhação",
    enunciado:
      "Implemente um jogo onde o usuário tenta adivinhar um número secreto.",
  },
  {
    worldId: 10,
    desafio: "Caixa eletrônico",
    enunciado:
      "Simule um caixa eletrônico que fornece notas para um valor solicitado.",
  },
  {
    worldId: 10,
    desafio: "Calculadora científica",
    enunciado: "Implemente uma calculadora com operações matemáticas diversas.",
  },
  {
    worldId: 10,
    desafio: "Conversor de temperatura",
    enunciado:
      "Crie um programa que converta entre Celsius, Fahrenheit e Kelvin.",
  },
  {
    worldId: 10,
    desafio: "Sistema bancário",
    enunciado: "Implemente um sistema simples com contas, depósitos e saques.",
  },
  {
    worldId: 10,
    desafio: "Gerador de senhas",
    enunciado:
      "Crie um gerador de senhas aleatórias com letras, números e símbolos.",
  },
  {
    worldId: 10,
    desafio: "Agenda de contatos",
    enunciado:
      "Crie uma agenda que permita adicionar, buscar e remover contatos.",
  },
];