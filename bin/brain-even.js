#!/usr/bin/env node

import { randomizer, source } from '../src/index.js'

const desc = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (num) => {
  return (num % 2 === 0) ? 'yes' : 'no'
}

const randomNums = [randomizer(100), randomizer(120), randomizer(150)]
const correctAnswers = [isEven(randomNums[0]), isEven(randomNums[1]), isEven(randomNums[2])]

const evenOrNot = (randomNums, correctAnswers, description) => {
  source(randomNums, correctAnswers, description)
}

export { evenOrNot }

evenOrNot(randomNums, correctAnswers, desc)
