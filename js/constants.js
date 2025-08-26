import { zoneGridEl } from './html-selection.js'

export const { rock, scissors, paper, spock, lizard } = {
	rock: 'rock',
	scissors: 'scissors',
	paper: 'paper',
	spock: 'spock',
	lizard: 'lizard',
}
export const hands = [rock, scissors, paper, spock, lizard]
export let mode = zoneGridEl.dataset.mode
export function modeChanger(value) {
	mode = value;
	zoneGridEl.dataset.mode = value
}
