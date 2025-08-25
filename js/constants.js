import { handsEL, handsHard, zoneGridEl } from './html-selection.js'

export const { rock, scissors, paper, spock, lizard } = {
	rock: 'rock',
	scissors: 'scissors',
	paper: 'paper',
	spock: 'spock',
	lizard: 'lizard',
}

export const hands = [rock, scissors, paper, spock, lizard]

export let mode = 'easy'

export function modeChanger(value) {
	mode = value

	handsEL.forEach(el => {
		const hand = el.alt

		if (hand === scissors) {
			if (value === 'hard') {
				el.parentElement.classList.remove(
					'col-start-1',
					'col-end-3',
					'place-items-center'
				)
				el.parentElement.classList.add('place-items-center')
			} else {
				el.parentElement.classList.add(
					'col-start-1',
					'col-end-3',
					'place-items-center'
				)
			}
		}

		if (hand === rock) {
			if (value === 'hard') {
				el.parentElement.classList.add(
					'col-start-1',
					'col-end-3',
					'place-items-center',
					"translate-y-6"
				)
			} else {
				el.parentElement.classList.remove(
					'col-start-1',
					'col-end-3',
					'place-items-center',
					"translate-y-6"
				)
				el.parentElement.classList.add('place-items-center')
			}
		}
		if (hand === paper) {
			el.parentElement.classList.add('place-items-center')
		}
		if (hand === spock) {
			el.parentElement.classList.add('place-items-end')
		}
		if (hand === lizard) {
			el.parentElement.classList.add('place-items-start')
		}
	})

	handsHard.forEach(hands => {
		if (value === 'hard') {
			zoneGridEl.classList.remove(
				'grid-cols-2',
				'grid-rows-2',
				'place-items-center',
				"bg-[url('../images/triangle.svg')]"
			)
			zoneGridEl.classList.add('grid-cols-2', 'grid-rows-3', 'gap-10'),
			"bg-[url('../images/Polygon.svg')]"
			hands.classList.remove('hidden')
		} else {
			zoneGridEl.classList.remove('grid-cols-2', 'grid-rows-3', 'gap-10'),
			"bg-[url('../images/Polygon.svg')]"
			zoneGridEl.classList.add(
				'grid-cols-2',
				'grid-rows-2',
				'gap-x-14',
				'gap-y-6',
				"bg-[url('../images/triangle.svg')]"
			)

			hands.classList.add('hidden')
		}
	})
}
