export const createLogger = () => {
    let commonArr = [];
    // function warn(string){
    //     return commonArr.push(
    //         {
    //             message: string,
    //             dateTime:new Date(),
    //             type: "warn",
    //         })
    // }
    // function error(string){
    //     return commonArr.push(
    //         {
    //             message: string,
    //             dateTime:new Date(),
    //             type: "error",
    //         })
    // }
    // function log(string){
    //     return commonArr.push(
    //         {
    //             message: string,
    //             dateTime:new Date(),
    //             type: "log",
    //         })
    // }
    // function getRecords(type){
    //     return !type ? commonArr
    //     .sort((a,b) => a.dateTime > b.dateTime ? 1 : -1)
    //     .map(elem => elem = elem.message) :
    //     commonArr
    //     .filter(elem => elem.type === type)
    //     .sort((a,b) => a.dateTime > b.dateTime ? 1 : -1)
    // }
    // return {
    //     warn,
    //     error,
    //     log,
    //     getRecords,
    // }
    return{
        warn: (string) => commonArr.push(
                    {
                        message: string,
                        dateTime:new Date(),
                        type: "warn",
                    }),
        error: (string) => commonArr.push(
                    {
                        message: string,
                        dateTime:new Date(),
                        type: "error",
                    }),
        log: (string)=> commonArr.push(
                    {
                        message: string,
                        dateTime:new Date(),
                        type: "log",
                    }),
        getRecords: (type) => !type ? commonArr
                .sort((a,b) => a.dateTime > b.dateTime ? 1 : -1)
                .map(elem => elem = elem.message) :
                commonArr
                .filter(elem => elem.type === type)
                .sort((a,b) => a.dateTime > b.dateTime ? 1 : -1),

    }
};

// let message1 = createLogger();


// message1.warn("I warn you");
// message1.log("some log");
// message1.warn("I wa8989rn you correctly");
// message1.error("BIGEST ERROR EVER!");
// message1.warn("I warn you immediatly");
// message1.error("ERROR!");

// const arrWarnMessage1 = message1.getRecords("warn"); 
// console.log(arrWarnMessage1);


// let message2 = createLogger();
// message2.warn("I warn youyyyyyyyyyyyy");
// message2.warn("I wa8989rn you correctyyyyyyyyyyyyyyyyyyly");
// const arrWarnMessage2 = message2.getRecords("warn"); 
// console.log(arrWarnMessage2);










