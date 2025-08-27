import { aiChoose } from './ai-choose.js'
import { lizard, paper, rock, scissors, spock } from './constants.js'
import { scoreEl } from './html-selection.js'

let score = 0 

export function checkWinner(ai, user) {
  if (ai === user) return { result: 'draw', winner: 'draw' }

  const aiWins =
    (ai === rock && (user === scissors || user === lizard)) ||
    (ai === scissors && (user === paper || user === lizard)) ||
    (ai === paper && (user === rock || user === spock)) ||
    (ai === lizard && (user === spock || user === paper)) ||
    (ai === spock && (user === scissors || user === rock))

  if (aiWins) {
    if (score > 0) score--
    scoreEl.textContent = score
    return { result: 'AI wins', winner: 'ai' }
  } else {
    score++
    scoreEl.textContent = score
    return { result: 'User wins', winner: 'user' }
  }
}