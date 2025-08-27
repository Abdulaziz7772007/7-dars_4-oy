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

export const shadows = 'shadow-[0_0_0_20px_rgba(119,130,146,0.2)]'
export const shadow = 'shadow-[0_0_0_20px_rgba(119,130,146,0.2),0_0_0_40px_rgba(59,130,246,0.15),0_0_0_60px_rgba(59,130,246,0.07)]'
