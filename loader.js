// staggerFromTo(target, time, { from }, { to }, staggerTime);
const balls = document.querySelectorAll('.ball');
TweenMax.staggerFromTo(balls, 1, {
	scale: .1,
	opacity: 0
}, {
	scale: 1.2,
	opacity: 1,
	repeat: -1,
	yoyo: true
}, .2);