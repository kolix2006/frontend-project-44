#!/usr/bin/env node

import { randomizer, source } from '../src/index.js'

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  let divsCounter = 0
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      divsCounter++
    }
  }
  return (divsCounter === 2) ? 'yes' : 'no'
}

const randomNums = [randomizer(100), randomizer(120), randomizer(150)]
const correctAnswers = [isPrime(randomNums[0]), isPrime(randomNums[1]), isPrime(randomNums[2])]

const primeOrNot = (randomNums, correctAnswers, description) => {
  source(randomNums, correctAnswers, description)
}

export { primeOrNot }

primeOrNot(randomNums, correctAnswers, desc)
