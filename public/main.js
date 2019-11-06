const gameOver = () => {
  // Display the appropriate winning message according to which team won
  document.querySelector('.message').textContent = winMsg(
    document.querySelector('.team-1-name').textContent,
    document.querySelector('.team-1-score').textContent,
    document.querySelector('.team-2-name').textContent,
    document.querySelector('.team-2-score').textContent
  )
  // Disable all buttons
  for (let i = 0; i < document.querySelectorAll('button').length; i++) {
    document.querySelectorAll('button')[i].disabled = true
  }
  // But re-enable the Reset button
  document.querySelector('.reset_button').disabled = false

  // Display the section with the Reset button
  document.querySelector('.reset').style.display = 'flex'
}

const resetScoreboard = () => {
  // Clear the custom team names
  for (let i = 0; i < document.querySelectorAll('.team-1-name').length; ++i) {
    document.querySelectorAll('.team-1-name')[i].textContent = 'Team 1'
  }
  for (let i = 0; i < document.querySelectorAll('.team-2-name').length; ++i) {
    document.querySelectorAll('.team-2-name')[i].textContent = 'Team 2'
  }
  // Clear the custom team name text boxes
  for (let i = 0; i < document.querySelectorAll('input').length; i++) {
    document.querySelectorAll('input')[i].value = ''
  }

  // Reset the score
  document.querySelector('.team-1-score').textContent = '0'
  document.querySelector('.team-2-score').textContent = '0'

  // Re-enable all buttons
  for (let i = 0; i < document.querySelectorAll('button').length; i++) {
    document.querySelectorAll('button')[i].disabled = false
  }

  // Clear the win message
  document.querySelector('.message').textContent = ''
  // Hide the section containing the Reset button
  document.querySelector('.reset').style.display = 'none'
}

const updateTeamName1 = () => {
  let i
  if (document.querySelector('.team-1-input').value.length > 0) {
    for (i = 0; i < document.querySelectorAll('.team-1-name').length; ++i) {
      document.querySelectorAll('.team-1-name')[
        i
      ].textContent = document.querySelector('.team-1-input').value
    }
  } else {
    for (i = 0; i < document.querySelectorAll('.team-1-name').length; ++i) {
      document.querySelectorAll('.team-1-name')[i].textContent = 'Team 1'
    }
  }
}

const updateTeamName2 = () => {
  let i
  if (document.querySelector('.team-2-input').value.length > 0) {
    for (i = 0; i < document.querySelectorAll('.team-2-name').length; ++i) {
      document.querySelectorAll('.team-2-name')[
        i
      ].textContent = document.querySelector('.team-2-input').value
    }
  } else {
    for (i = 0; i < document.querySelectorAll('.team-2-name').length; ++i) {
      document.querySelectorAll('.team-2-name')[i].textContent = 'Team 2'
    }
  }
}

const winMsg = (team1Name, team1Score, team2Name, team2Score) => {
  if (team1Score > team2Score) {
    return team1Name + ' won!'
  } else if (team1Score == team2Score) {
    return 'Its a tie!'
  } else {
    return team2Name + ' won!'
  }
}

const add1ToTeam1Score = () => {
  if (document.querySelector('.team-1-score').textContent < 21) {
    document.querySelector('.team-1-score').textContent++
  }
  if (document.querySelector('.team-1-score').textContent == 21) {
    gameOver()
  }
}

const subtract1FromTeam1Score = () => {
  if (document.querySelector('.team-1-score').textContent > 0) {
    document.querySelector('.team-1-score').textContent--
  }
}

const add1ToTeam2Score = () => {
  if (document.querySelector('.team-2-score').textContent < 21) {
    document.querySelector('.team-2-score').textContent++
  }
  if (document.querySelector('.team-2-score').textContent == 21) {
    gameOver()
  }
}

const subtract1FromTeam2Score = () => {
  if (document.querySelector('.team-2-score').textContent > 0) {
    document.querySelector('.team-2-score').textContent--
  }
}

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamName1)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamName2)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', add1ToTeam1Score)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtract1FromTeam1Score)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', add1ToTeam2Score)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtract1FromTeam2Score)

document
  .querySelector('.reset_button')
  .addEventListener('click', resetScoreboard)
