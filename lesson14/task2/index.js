
export const createMessenger = () => {
	let message = "Just learn it!";
	let sender = "Gromcode";
	function sendMessage(name){
		console.log(`${name}, ${message} Your ${sender}`);
	}
	function setMessage(text){
		message = text;
    }
    function setSender(text){
		sender = text;
	}
	return {
		sendMessage,
		setMessage,
		setSender,
	};
};
const obj1 = createMessenger();
obj1.sendMessage("Bob");
obj1.setMessage("Good job!");
obj1.setSender("Gromcode");
obj1.sendMessage("Bob");
