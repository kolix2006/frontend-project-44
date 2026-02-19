#!/usr/bin/env node

import { randomizer, source } from '../src/index.js'

const desc = 'Find the greatest common divisor of given numbers.'

const makePairOfNums = (num1, num2) => {
  return `${num1} ${num2}`
}

const gcdBySplit = (str) => {
  const pair = str.split(' ')
  let num1 = Number(pair[0])
  let num2 = Number(pair[1])

  while (num2 !== 0) {
    let remainder = num1 % num2
    num1 = num2
    num2 = remainder
  }
  return `${num1}`
}

const randomPairs = [
  makePairOfNums((randomizer(100) + 1), (randomizer(100) + 1)),
  makePairOfNums((randomizer(100) + 1), (randomizer(100) + 1)),
  makePairOfNums((randomizer(100) + 1), (randomizer(100) + 1)),
]
const correctAnswers = [gcdBySplit(randomPairs[0]), gcdBySplit(randomPairs[1]), gcdBySplit(randomPairs[2])]

const findGcd = (randomPairs, correctAnswers, desc) => {
  source(randomPairs, correctAnswers, desc)
}

export { findGcd }

findGcd(randomPairs, correctAnswers, desc)
