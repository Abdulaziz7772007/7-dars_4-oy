import { chooseZone, statusZone } from './html-selection.js'

export function switchZone (boolean) {
	if (boolean) {
		chooseZone.classList.add('hidden')
		statusZone.classList.remove('hidden')
	} else {
		chooseZone.classList.remove('hidden')
		statusZone.classList.add('hidden')
	}
}