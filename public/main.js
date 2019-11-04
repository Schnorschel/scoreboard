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

const add1ToTeam1Score = () => {
  console.log(document.querySelector('.team-1-score').textContent)
  document.querySelector('.team-1-score').textContent++
}

const subtract1FromTeam1Score = () => {
  if (document.querySelector('.team-1-score').textContent > 0) {
    document.querySelector('.team-1-score').textContent--
  }
}

const add1ToTeam2Score = () => {
  console.log(document.querySelector('.team-2-score').textContent)
  document.querySelector('.team-2-score').textContent++
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
