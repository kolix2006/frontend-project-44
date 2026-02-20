#!/usr/bin/env node

import { randomizer, source } from '../src/index.js'

const desc = 'What number is missing in the progression?'

const generateProgression = (progressionLength) => {
  const progression = [randomizer(50)]
  const start = progression[0]
  const gap = randomizer(4)

  for (let i = 1; i <= progressionLength; i++) {
    let currentElement = start + i * gap
    progression.push(currentElement)
  }

  progression[randomizer(progression.length) - 1] = '..'
  const strProgression = progression.join(' ')
  return strProgression
}

const findBySplit = (progression) => {
  const separatedProgression = progression.split(' ')
  const indexOfSkip = separatedProgression.indexOf('..')

  let findGap
  let result
  if (indexOfSkip === 0) {
    findGap = separatedProgression[2] - separatedProgression[1]
    result = Number(separatedProgression[1]) - findGap
  }
  else if (indexOfSkip === separatedProgression.length - 1) {
    findGap = separatedProgression[2] - separatedProgression[1]
    result = Number(separatedProgression[indexOfSkip - 1]) + findGap
  }
  else {
    findGap = (separatedProgression[indexOfSkip + 1] - separatedProgression[indexOfSkip - 1]) / 2
    result = Number(separatedProgression[indexOfSkip + 1]) - findGap
  }
  return `${result}`
}

const progressions = [
  generateProgression(randomizer(7) + 4),
  generateProgression(randomizer(8) + 5),
  generateProgression(randomizer(9) + 6),
]
const correctAnswers = [findBySplit(progressions[0]), findBySplit(progressions[1]), findBySplit(progressions[2])]

const solveProgs = (progressions, correctAnswers, desc) => {
  source(progressions, correctAnswers, desc)
}

export { solveProgs }

solveProgs(progressions, correctAnswers, desc)
