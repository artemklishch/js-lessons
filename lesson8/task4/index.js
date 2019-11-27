const getAdults = obj => {
    let object = {};
    for(let prop in obj){
        if(obj[prop] >= 18) object[prop] = obj[prop];
    }
    return object;
};