function getNumberFromUser (promptText) {
  let userAnswer

  do {
    userAnswer = prompt(promptText)
    if (userAnswer === '') {
      alert('Your answer can\'t be empty.')
    } else if (isNaN(userAnswer)) {
      alert('Your answer have to be a number.')
    }
  } while (userAnswer === '' || isNaN(userAnswer))

  if (userAnswer === null) {
    return userAnswer
  } else {
    return Number(userAnswer)
  }
}

while (true) {
  const firstAnswer = getNumberFromUser('Enter two numbers to get their ' +
                                        'sum.\n\nFirst number:')
  if (firstAnswer === null) {
    break
  }
  const secondAnswer = getNumberFromUser('Enter two numbers to get their ' +
                                         'sum.\n\nFirst number: ' +
                                         firstAnswer + '\nSecond number:')
  if (secondAnswer === null) {
    break
  }
  alert(`${firstAnswer} + ${secondAnswer} = ${firstAnswer + secondAnswer}`)
  break
}
