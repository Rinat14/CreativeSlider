const container = document.querySelector('.container');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCound = mainSlide.querySelectorAll('div').length;
sidebar.style.top = `-${(slidesCound - 1) * 100}vh`;
let activeSlideIndex = 0;
upBtn.addEventListener('click', () => {
	changeSlide('up');
});
downBtn.addEventListener('click', () => {
	changeSlide('down');
});
function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex === slidesCound) {
			activeSlideIndex = 0;
		}
	}
	if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCound - 1;
		}
	}
	const height = container.clientHeight;
	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}