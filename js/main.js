// import { aiChoose } from './ai-choose.js';
import { aiChoose } from './ai-choose.js'
import { checkWinner } from './checkWinner.js'
import { aiImg, hands, returnGameBtn, statusText, userImg } from './html-selection.js'
import { switchZone } from './switch-zone.js'

hands.forEach(el => {
	el.addEventListener('click', e => {
		const user = e.target.alt
		userImg.src = e.target.src
		switchZone(true)

		setTimeout(() => {
			const ai = aiChoose()
			const winner = checkWinner(ai, user)
			aiImg.src = `./images/${ai}.svg`
			statusText.textContent = winner
		}, 1000)
	})
})

returnGameBtn.addEventListener('click', () => {
	switchZone(false)
})
