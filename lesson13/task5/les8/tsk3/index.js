export const pickProps = (obj, arr) => {
    if(typeof obj !== 'object' || !Array.isArray(arr)) return null;
    const object = {};
    for(let prop in obj){
        for(let elem of arr){
            if(prop === elem)object[prop] = obj[prop]; 
        }
    }
    return object;
};
