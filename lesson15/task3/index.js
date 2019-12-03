export const createLogger = () => {
    let commonArr = [];
    return {
        warn: (string) => commonArr.unshift(
                {
                    message: string,
                    dateTime:new Date(),
                    type: "warn",
                }),
        error: (string) => commonArr.unshift(
                {
                    message: string,
                    dateTime:new Date(),
                    type: "error",
                }),
        log: (string) => commonArr.unshift(
                {
                    message: string,
                    dateTime:new Date(),
                    type: "log",
                }),
        getRecords: (type) => !type ? commonArr
                //.sort((a,b) => a.dateTime > b.dateTime ? 1 : -1)
                .map(elem => elem = elem.message) :
                commonArr
                .filter(elem => elem.type === type)
                //.sort((a,b) => a.dateTime > b.dateTime ? 1 : -1);
        };
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









