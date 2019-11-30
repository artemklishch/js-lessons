export const getAdults = obj => {
    if(typeof obj !== "object" || Array.isArray(obj) || obj === undefined) return null;
    let object = {};
    for(let prop in obj){
        if(obj[prop] >= 18) object[prop] = obj[prop];
    }
    return object;
};