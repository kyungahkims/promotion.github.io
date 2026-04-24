/* 높이 */
function setScreen() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('load', setScreen);
window.addEventListener('resize', setScreen);
window.addEventListener('orientationchange', setScreen);


/* 타이머 */
function updateCountdown() {
	const now = new Date();

	const end = new Date('2026-07-19T23:59:59');

	const diff = end - now;

	if (diff <= 0) {
		document.getElementById('countdown').textContent = '경기 종료';
		return;
	}

	const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
	const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
	const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

	document.getElementById('countdown').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();