export const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerId:0,
    startTimer() {
        this.timerId = setInterval(() => {
            if(this.secondsPassed === 60){
                this.minsPassed++;
                this.secondsPassed = 0;
            }
            this.secondsPassed += 5; 
        }, 5000);
    },
    getTime(){
        if(this.secondsPassed < 10){
           return this.minsPassed + ":0" + this.secondsPassed;
        }else return this.minsPassed + ":" + this.secondsPassed;
    },
    stopTimer(){
        clearInterval(this.timerId);      
    },
    resetTimer(){
        this.minsPassed = 0;
        this.secondsPassed = 0;
    },
};
// const tmr = timer.startTimer;
// const gtTime = timer.getTime;
// const resetTm = timer.resetTimer;
// const stopTm = timer.stopTimer;
// tmr.call(timer);


// //setTimeout(() => console.log(gtTime.call(timer)), 18*1000);
// //setTimeout(() => console.log(resetTm.call(timer)), 25*1000);
// setTimeout(() => stopTm.call(timer), 20*1000); 
// setTimeout(() => tmr.call(timer), 30*1000); 


    
    

