import { lizard, paper, rock, scissors, spock } from './constants.js'
import { scoreEl } from './html-selection.js'

let score = 0 // score global saqlanadi

export function checkWinner(ai, user) {
  if (ai === user) {
    return 'draw'
  } else if (
    (ai === rock && (user === scissors || user === lizard)) ||
    (ai === scissors && (user === paper || user === lizard)) ||
    (ai === paper && (user === rock || user === spock)) ||
    (ai === lizard && (user === spock || user === paper)) ||
    (ai === spock && (user === scissors || user === rock))
  ) {
    if (score > 0) {
      score = score - 1
    }
    scoreEl.textContent = score
    
    return 'AI wins'
  } else {
    score = score + 1
    scoreEl.textContent = score
    return 'User wins'
  }
}
