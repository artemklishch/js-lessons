export const callbackPrompt = {
    message: "Tell me your phone number",
    showPrompt(){
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPrompt(ms){
        setTimeout(this.showPrompt.bind(this), ms);
    },
};