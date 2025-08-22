import { rock, scissors, paper } from './constants.js'
import { aiChoose } from './ai-choose.js'

export function checkWinner(ai, ucer) {
	if (ai === ucer) {
		return 'Draw'
	} else if (
		(ai === rock && ucer === scissors) ||
		(ai === scissors && ucer === paper) ||
		(ai === paper && ucer === rock)
	) {
		return 'AI wins'
	} else {
		return 'Ucer wins'
	}
}


