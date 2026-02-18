#!/usr/bin/env node

import { source } from '../src/index.js'

const desc = 'What is the result of the expression?'

const randomizer = (num) => {
  return (Math.floor(Math.random() * num))
}

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
  makeProblem(randomizer(101), operations[randomizer(3)], randomizer(101)),
  makeProblem(randomizer(101), operations[randomizer(3)], randomizer(101)),
  makeProblem(randomizer(101), operations[randomizer(3)], randomizer(101)),
]
const correctAnswers = [solveBySplit(problems[0]), solveBySplit(problems[1]), solveBySplit(problems[2])]

const calcIt = (problems, correctAnswers, description) => {
  source(problems, correctAnswers, description)
}

export { calcIt }

calcIt(problems, correctAnswers, desc)
