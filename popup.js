"use strict";

const base1 = document.getElementById("base1");
const value1 = document.getElementById("value1");
const base2 = document.getElementById("base2");
const value2 = document.getElementById("value2");
const convert = document.getElementById("convert");

convert.onclick = (_) => {
	const number = parseInt(value1.value, parseInt(base1.value)).toString(parseInt(base2.value));
	if (base2.value === "2" && number !== NaN.toString()) {
		value2.innerHTML = "";
		const table = document.createElement("table");
		const bits = table.insertRow();
		const places = table.insertRow();
		Array.from(number).forEach((value, index) => {
			bits.insertCell().innerText = value.toString();
			places.insertCell().innerText = number.length - index
		})
		value2.appendChild(table);
	} else {
		value2.innerHTML = number;
	}	
};
