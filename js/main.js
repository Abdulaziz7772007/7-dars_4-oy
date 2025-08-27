import { aiChoose } from './ai-choose.js'
import { checkWinner } from './checkWinner.js'
import { mode, modeChanger, shadow, shadows } from './constants.js'
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
        el.classList.add(shadows)
        el.classList.add('rounded-full')
    })

    el.addEventListener('mouseleave', () => {
        el.classList.remove(shadows)
        el.classList.remove('rounded-full')
    })

    el.addEventListener('click', e => {
        const user = e.target.alt
        userImg.src = e.target.src
        switchZone(true)

        setTimeout(() => {
            const ai = aiChoose(mode)
            aiImg.src = `./images/${ai}.svg`

            const { result, winner } = checkWinner(ai, user)
            statusText.textContent = result

            const targetEl =
                winner === 'user' ? userImg : winner === 'ai' ? aiImg : null
            if (targetEl) {
                targetEl.classList.add(shadow)
                targetEl.classList.add('rounded-full')
            }
        }, 1000)
    })
})

returnGameBtn.addEventListener('click', () => {
    switchZone(false)
    aiImg.src = `./images/oval.svg`

    userImg.classList.remove(shadow)
    aiImg.classList.remove(shadow)
})

// mode changer

modeChangerEl.addEventListener('click', () => {
	if (mode === 'easy') {
		rulesEl.src = '../images/rules-pro.svg'
		modeChanger('hard')
		modeChangerEl.textContent = 'Hard mode'
	} else {
		modeChanger('easy')
		rulesEl.src = '../images/rules.svg'

		modeChangerEl.textContent = 'Easy mode'
	}
})
