export const createLogger = () => {
    let commonArr = [];
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
                .filter(elem => elem = elem.message) :
                commonArr
                .filter(elem => elem.type === type),

    }
};
