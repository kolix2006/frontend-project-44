#!/usr/bin/env node

import { randomizer, source } from '../src/index.js'

const desc = 'What is the result of the expression?'

const makeProblem = (num1, operator, num2) => {
  return `${num1} ${operator} ${num2}`
}

const solveBySplit = (problem) => {
  const arr = problem.split(' ')
  switch (arr[1]) {
    case '+':
      return (parseInt(arr[0]) + parseInt(arr[2])).toString()
    case '-':
      return (parseInt(arr[0]) - parseInt(arr[2])).toString()
    case '*':
      return (parseInt(arr[0]) * parseInt(arr[2])).toString()
  }
}

const operations = ['+', '-', '*']
const problems = [
  makeProblem(randomizer(1, 20), operations[randomizer(0, 2)], randomizer(1, 20)),
  makeProblem(randomizer(10, 50), operations[randomizer(0, 2)], randomizer(10, 50)),
  makeProblem(randomizer(50, 100), operations[randomizer(0, 2)], randomizer(50, 100)),
]
const correctAnswers = [solveBySplit(problems[0]), solveBySplit(problems[1]), solveBySplit(problems[2])]

const calcIt = (problems, correctAnswers, description) => {
  source(problems, correctAnswers, description)
}

export { calcIt }

calcIt(problems, correctAnswers, desc)
