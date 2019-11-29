const splitString = (str, len) => {
    if(typeof str !== 'string') return null;
    let arr = [];
    let startPosition = 0;
	while(true){
		let chunk = str.substr(startPosition,len); 
        if(chunk.length >= len){
            arr.push(chunk);
		    startPosition += len;   
        }
        if(!len){
            let tempStr = ".";
            for(let i = chunk.length; i < 9; i++){
                chunk += tempStr;
            }
            arr.push(chunk + tempStr);
		    break;
        }
        if(chunk.length < len){
            let tempStr = "";
            for(let i = 0; i < len-1; i++){
                tempStr += "."
            }
            arr.push(chunk + tempStr);
		    break;
        } 
	}
    return arr;
};

// const str = 'abcd efgh';
// console.log(splitString(str));