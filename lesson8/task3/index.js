const pickProps = (obj, arr) => {
    const object = {};
    for(let prop in obj){
        for(let elem of arr){
            if(prop === elem)object[prop] = obj[prop]; 
        }
    }
    return object;
};