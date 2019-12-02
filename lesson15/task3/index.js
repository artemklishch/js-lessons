'use strict';

export const createLogger = () => {
    let commonArr = [];
    let arr = [];
    function getRecords(arg){
        switch(arg){
            case "warn": arr = commonArr.filter(elem => elem.type === "warn");break;
            case "error": arr = commonArr.filter(elem => elem.type === "error");break;
            case "log": arr = commonArr.filter(elem => elem.type === "log");break;
            case undefined: arr = commonArr.map(elem => elem = elem.message);break;
        }
        return arr;
    }
    function warn(string){
        let obj = {
            message: string,
            dateTime:new Date(),
            type: "warn",
        }
        commonArr.unshift(obj);
    }
    function error(string){
        let obj = {
            message: string,
            dateTime:new Date(),
            type: "error",
        }
        commonArr.unshift(obj);
    }
    function log(string){
        let obj = {
            message: string,
            dateTime:new Date(),
            type: "log",
        }
        commonArr.unshift(obj);
    }
    return {
        warn,
        error,
        log,
        getRecords,
    }
};