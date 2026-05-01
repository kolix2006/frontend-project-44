#!/usr/bin/env node

import { randomizer, source } from '../src/index.js'

const desc = 'How many divisors does this number have?'

const divsCount = (num) => {
  const divs = []
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      divs.push(i)
    }
  }
  return `${divs.length + 1}`
}

const randomNums = [randomizer(10, 30), randomizer(20, 50), randomizer(30, 70)]
const correctAnswers = [divsCount(randomNums[0]), divsCount(randomNums[1]), divsCount(randomNums[2])]

const howManyDivs = (randomNums, correctAnswers, description) => {
  source(randomNums, correctAnswers, description)
}

export { howManyDivs }

howManyDivs(randomNums, correctAnswers, desc)
