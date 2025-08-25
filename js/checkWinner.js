import { rock, scissors, paper, lizard, spock } from './constants.js'
import { aiChoose } from './ai-choose.js'

export function checkWinner(ai, ucer) {
	if (ai == ucer) {
		return 'draw'
	} else if (
		(ai == rock && (ucer == scissors || user == lizard)) ||
		(ai == scissors && (ucer == paper || user == lizard)) ||
		(ai == paper && (ucer == rock || ucer == spock)) || (ai == lizard && (ucer == spock || ucer == paper)) || (ai == spock && (ucer == scissors || ucer ==rock))
	) {
		return 'AI wins'
	} else {
		return 'Ucer wins'
	}
}

