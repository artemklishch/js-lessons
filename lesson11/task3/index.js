const splitString = (str, len = 10) => {
    if (typeof str !== 'string') return null;
    let arrLength = Math.ceil(str.length/len);
    let startPosition = 0;
    return Array(arrLength)
        .fill()
        .map(() => {
            let elem = str.substr(startPosition, len);
            startPosition += len;
            if(elem.length >= len)return elem;
            if(elem.length < len){
                while(elem.length < len){
                    elem += ".";
                }
                return elem;    
            }      
        });
};
