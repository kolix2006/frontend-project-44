### Hexlet tests and linter status:
[![Actions Status](https://github.com/kolix2006/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kolix2006/frontend-project-44/actions)

## Brain Games

Коллекция из пяти консольных игр для тренировки мозга. Каждая игра задаёт три вопроса - если ответить на все правильно, игрок побеждает.

## Установка
```bash
git clone https://github.com/kolix2006/frontend-project-44.git
cd frontend-project-44
npm ci
```

## Запуск
```bash
node bin/brain-games.js      # приветствие
node bin/brain-even.js       # проверка на чётность
node bin/brain-calc.js       # калькулятор
node bin/brain-gcd.js        # наибольший общий делитель
node bin/brain-progression.js # арифметическая прогрессия
node bin/brain-prime.js      # простое ли число?
```

## Игры

**"Проверка на чётность"**
Пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no - если нечётное.

![brain-even](screenshots/demo_brain-even.png)

**"Калькулятор"**
Пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

![brain-calc](screenshots/demo_brain-calc.png)

**"НОД"**
Пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

![brain-gcd](screenshots/demo_brain-gcd.png)

**"Арифметическая прогрессия"**
Пользователю показывается ряд чисел, образующий арифметическую прогрессию, в которой случайное число заменяется двумя точками. Игрок должен определить это число.

![brain-progression](screenshots/demo_brain-progression.png)

**"Простое ли число?"**
Пользователю показывается случайное число. И ему нужно ответить yes, если число простое, или no - если нет.

![brain-prime](screenshots/demo_brain-prime.png)

При неверном ответе игра завершается и показывается правильный ответ.
