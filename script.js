'use strict';

const linkInput = document.querySelector('#link-input');
const hoursInput = document.querySelector('#hours-input');
const minutesInput = document.querySelector('#minutes-input');
const secondsInput = document.querySelector('#seconds-input');
const output = document.querySelector('#output');
const alertPopup = document.querySelector('#alert');

const calcSeconds = () => {
	const total = +secondsInput.value + (+minutesInput.value * 60) + (+hoursInput.value * 3600);
	return total;
}

const renderOutput = () => {
	if (linkInput.value === '') return;
	if (linkInput.value.match(/watch\?/g)) {
		output.textContent = `${linkInput.value}?&t=${calcSeconds()}s`;
	} else {
		const link = linkInput.value.replace(/\?.*/g, '');
		output.textContent = `${link}?&t=${calcSeconds()}s`;
	}
}

hoursInput.addEventListener('input', renderOutput);
minutesInput.addEventListener('input', () => {
	if (minutesInput.value > 59) minutesInput.value = '';
	renderOutput();
});
secondsInput.addEventListener('input', () => {
	if (secondsInput.value > 59) secondsInput.value = '';
	renderOutput();
});

output.addEventListener('click', () => {
	navigator.clipboard.writeText(output.textContent);

	alertPopup.classList.add('show');

	setTimeout(() => {
		alertPopup.classList.remove('show');
	}, 3000);
});