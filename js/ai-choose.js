import { hands } from "./constants.js";
export function aiChoose(level = "easy") {
	const hard = 5
	const easy = 3
	const border = level === "easy" ? easy : hard
	const randomIndex = Math.trunc(Math.random() * border);
	return hands[randomIndex];
}