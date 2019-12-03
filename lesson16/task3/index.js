
export function createArrayOfFunctions(number){
    if(!number) return [];
    if(typeof number !== 'number') return null;
    let arr = [];
    for(let i = 0; i < number; i++){
        arr[i] = function(){
            return i;
        }
    }
    return arr;
}