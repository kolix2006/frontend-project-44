#!/usr/bin/env node

import { source } from '../src/index.js'

const desc = 'Answer "yes" if the number is even, otherwise answer "no".'

const randomizer = () => {
  return (Math.floor(Math.random() * 100) + 1)
}

const isEven = (num) => {
  return (num % 2 === 0) ? 'yes' : 'no'
}

const randomNums = [randomizer(), randomizer(), randomizer()]
const correctAnswers = [isEven(randomNums[0]), isEven(randomNums[1]), isEven(randomNums[2])]

const evenOrNot = (randomNums, correctAnswers, description) => {
  source(randomNums, correctAnswers, description)
}

export { evenOrNot }

evenOrNot(randomNums, correctAnswers, desc)
