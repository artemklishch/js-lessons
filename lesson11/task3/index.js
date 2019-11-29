// const splitString = (str, len) => {
//     if(typeof str !== 'string') return null;
//     let arr = [];
//     let startPosition = 0;
// 	while(true){
// 		let chunk = str.substr(startPosition,len); 
//         if(chunk.length >= len){
//             arr.push(chunk);
// 		    startPosition += len;   
//         }
//         if(!len){
//             let tempStr = ".";
//             for(let i = chunk.length; i < 9; i++){
//                 chunk += tempStr;
//             }
//             arr.push(chunk + tempStr);
// 		    break;
//         }
//         if(chunk.length < len){
//             let tempStr = "";
//             for(let i = 0; i < len-1; i++){
//                 tempStr += "."
//             }
//             arr.push(chunk + tempStr);
// 		    break;
//         } 
// 	}
//     return arr;
// };
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

// const str = 'abcd efgh';
// console.log(splitString(str, 4));