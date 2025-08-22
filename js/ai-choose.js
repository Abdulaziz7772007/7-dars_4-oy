export function aiChoose(){
	const hands = ["rock", "paper", "scissors"];
	const randomIndex = Math.trunc(Math.random() * hands.length);
	return hands[randomIndex];
}