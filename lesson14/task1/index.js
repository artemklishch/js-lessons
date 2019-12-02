'use strict';

let message;
export function sendMessage (name){
	const sender = "Gromecode";
	console.log(`${name}, ${message} Your ${sender}`);
}
export function setMessage(text){
	message = text;
}


