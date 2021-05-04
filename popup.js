"use strict";

const base1 = document.getElementById("base1");
const value1 = document.getElementById("value1");
const base2 = document.getElementById("base2");
const value2 = document.getElementById("value2");
const convert = document.getElementById("convert");

convert.onclick = (_) => {
	const number = parseInt(value1.value, parseInt(base1.value)).toString(parseInt(base2.value));
	if (base2.value === "2" && number !== NaN.toString()) {
		const bits = number.split("").join("|");
		const dashes = [];
		for (let index = 0; index < bits.length; index++) {
			let element = bits[index];
			dashes.push(element === "|" ? "+" : "-");
		}
		const places = [];
		for (let index = 0; index < number.length; index++) {
			places.unshift(index + 1);
		}
		value2.innerHTML = `${bits}<br>${dashes.join("")}<br>${places.map(value => value.toString()).join("|")}`;
	} else {
		value2.innerHTML = number;
	}	
};
