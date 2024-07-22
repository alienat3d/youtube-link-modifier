'use strict';

const linkInput = document.querySelector('#link-input');
const hoursInput = document.querySelector('#hours-input');
const minutesInput = document.querySelector('#minutes-input');
const secondsInput = document.querySelector('#seconds-input');
const output = document.querySelector('#output');
const alertPopup = document.querySelector('#alert');

const calcSeconds = () => {
	const total = +secondsInput.value + (+minutesInput.value * 60) + (+hoursInput.value * 360);
	return total;
}

const renderOutput = () => {
	if (linkInput.value === '') return;
	output.textContent = `${linkInput.value}?&t=${calcSeconds()}`;
}

hoursInput.addEventListener('input', renderOutput);
minutesInput.addEventListener('input', renderOutput);

output.addEventListener('click', () => {
  navigator.clipboard.writeText(output.textContent);
  
  alertPopup.classList.add('show');

  setTimeout(() => {
    alertPopup.classList.remove('show');
  }, 3000);
});