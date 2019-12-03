
export function createArrayOfFunctions(number){
    if(typeof number !== 'number') return null;
    let arr = [];
    for(let i = 0; i < number; i++){
        arr[i] = function(){
            return i;
        }
    }
    return arr;
}