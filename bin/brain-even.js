import readlineSync from 'readline-sync'
import { sayHello } from '../src/cli.js'

const randomizer = () => {
  return (Math.floor(Math.random() * 100) + 1)
}

const isEven = (num) => {
  return (num % 2 === 0) ? 'yes' : 'no'
}

const randomNums = [randomizer(), randomizer(), randomizer()]
const correctAnswers = [isEven(randomNums[0]), isEven(randomNums[1]), isEven(randomNums[2])]

const evenOrNot = () => {
  const userName = sayHello()
  console.log('Answer "yes" if the number is even, otherwise answer "no"')
  for (let i = 0; i < randomNums.length; i++) {
    console.log(`Question: ${randomNums[i]}`)
    const playersAnswer1 = readlineSync.question('Your answer: ')
    if (playersAnswer1 === correctAnswers[i]) {
      console.log('Correct!')
    }
    else {
      console.log(`${playersAnswer1} is wrong answer ;(. Correct answer was ${correctAnswers[i]}`)
      console.log(`Let's try again, ` + userName + '!')
      break
    }
  }
}

export { evenOrNot }

evenOrNot()
