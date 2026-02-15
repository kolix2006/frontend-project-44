import readlineSync from 'readline-sync'

const sayHello = () => {
    console.log('Welcome to the Brain Games!')
    var userName = readlineSync.question('May I have your name? ')
    console.log('Hello, ' + userName + '!')
}

export { sayHello }
