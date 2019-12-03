export const createLogger = () => {
    let commonArr = [];
    function getRecords(type){
        return !type ? commonArr
            //.sort((a,b) => a.dateTime > b.dateTime ? 1 : -1)
            .map(elem => elem = elem.message) :
            commonArr
            .filter(elem => elem.type === type);
            //.sort((a,b) => a.dateTime > b.dateTime ? 1 : -1);
    }
    function warn(string){
        return commonArr.unshift(
            {
                message: string,
                dateTime:new Date(),
                type: "warn",
            }
        );
    }
    function error(string){
        return commonArr.unshift(
            {
                message: string,
                dateTime:new Date(),
                type: "error",
            }
        );
    }
    function log(string){
        return commonArr.unshift(
            {
                message: string,
                dateTime:new Date(),
                type: "log",
            }
        );
    }
    return {
        warn,
        error,
        log,
        getRecords,
    }
};

// let message1 = createLogger();


// message1.warn("I warn you");
// message1.log("some log");
// message1.warn("I wa8989rn you correctly");
// message1.error("BIGEST ERROR EVER!");
// message1.warn("I warn you immediatly");
// message1.error("ERROR!");

// const arrWarnMessage1 = message1.getRecords("error"); 
// console.log(arrWarnMessage1);









