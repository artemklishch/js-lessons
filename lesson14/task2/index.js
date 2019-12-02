
const createMessenger = () => {
	let message = "Just learn it!";
	function sendMessage(name){
		const sender = "Gromecode";
		console.log(`${name}, ${message}. You ${sender}`);
	}
	function setMessage(text){
		message = text;
    }
    function setSender(){

	}
	return {
		sendMessage,
		setMessage,
	};
};
const obj1 = createMessenger();
obj1.sendMessage("Bob");
obj1.setMessage("Good job!");
obj1.sendMessage("Bob");