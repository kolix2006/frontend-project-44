import readlineSync from 'readline-sync'
import { sayHello } from '../src/cli.js'

const randomizer = (num) => {
  return (Math.floor((Math.random() * num) + 1))
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
