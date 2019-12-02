let message = "Just learn it!";
const createMessenger = () => {
	let message = "Hi!";
	function sendMessage(name){
		const sender = "Gromecode";
		console.log(`${name}, ${message}. You ${sender}`);
	}
	function setMessage(text){
		message = text;
    }
    
	return {
		sendMessage,
		setMessage,
		id: message,
	};
};