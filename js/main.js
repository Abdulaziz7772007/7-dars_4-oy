// import { aiChoose } from './ai-choose.js';
import { aiChoose } from './ai-choose.js'
import { checkWinner } from './checkWinner.js'
import { mode, modeChanger } from './constants.js'
import { aiImg, handsEL, modeChangerEl, returnGameBtn, statusText, userImg } from './html-selection.js'
import { switchZone } from './switch-zone.js'

// hands
handsEL.forEach(el => {
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
		modeChanger('hard')
		modeChangerEl.textContent = 'Hard mode'
	} else {
		modeChanger('easy')
		modeChangerEl.textContent = 'Easy mode'
	}
})