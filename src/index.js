import readlineSync from 'readline-sync'
import { sayHello } from '../src/cli.js'

const randomizer = (min, max) => {
  const array = new Uint32Array(1)
  crypto.getRandomValues(array)

  const random = array[0] / (0xffffffff + 1)

  return Math.floor(random * (max - min + 1)) + min
}

const source = (problems, correctAnswers, description) => {
  let isWinner = true
  const userName = sayHello()
  console.log(description)
  for (let i = 0; i < problems.length; i++) {
    console.log(`Question: ${problems[i]}`)
    const playersAnswer1 = readlineSync.question('Your answer: ')
    if (playersAnswer1 === correctAnswers[i]) {
      console.log('Correct!')
    }
    else {
      console.log(`"${playersAnswer1}" is wrong answer ;(. Correct answer was "${correctAnswers[i]}"`)
      console.log(`Let's try again, ` + userName + '!')
      isWinner = false
      break
    }
  }
  if (isWinner === true) {
    console.log('Congratulations, ' + userName + '!')
  }
}

export { randomizer, source }
