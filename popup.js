"use strict";

const base1 = document.getElementById("base1");
const value1 = document.getElementById("value1");
const base2 = document.getElementById("base2");
const value2 = document.getElementById("value2");
const convert = document.getElementById("convert");

convert.onclick = (_) => {
	value2.innerHTML = parseInt(value1.value, parseInt(base1.value)).toString(parseInt(base2.value));
};
