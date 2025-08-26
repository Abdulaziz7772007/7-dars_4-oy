import { aiChoose } from './ai-choose.js'
import { checkWinner } from './checkWinner.js'
import { mode, modeChanger } from './constants.js'
import {
	aiImg,
	handsEL,
	modeChangerEl,
	returnGameBtn,
	rulesEl,
	statusText,
	userImg,
} from './html-selection.js'
import { switchZone } from './switch-zone.js'

// hands
handsEL.forEach(el => {
	el.addEventListener('mouseenter', () => {
		el.classList.add(
			'rounded-full',
			'shadow-[0_0_0_20px_rgba(119,130,146,0.2),_0_0_40px_20px_rgba(59,130,246,0.001)]'
		)
	})

	el.addEventListener('mouseleave', () => {
		el.classList.remove(
			'shadow-[0_0_0_20px_rgba(119,130,146,0.2),_0_0_40px_20px_rgba(59,130,246,0.001)]'
		)
	})

	el.addEventListener('click', e => {
		const user = e.target.alt
		userImg.src = e.target.src
		switchZone(true)

		setTimeout(() => {
			const ai = aiChoose(mode)
			const winner = checkWinner(ai, user)
			aiImg.src = `./images/${ai}.svg`
			statusText.textContent = winner
		}, 1000)
	})
})

// return game
returnGameBtn.addEventListener('click', () => {
	switchZone(false)
	aiImg.src = `./images/oval.svg`
})

// mode changer

modeChangerEl.addEventListener('click', () => {
	if (mode === 'easy') {
		rulesEl.src = '../images/rules-pro.svg'
		modeChanger('hard')
		modeChangerEl.textContent = 'Hard mode'
	} else {
		modeChanger('easy')

		modeChangerEl.textContent = 'Easy mode'
	}
})
