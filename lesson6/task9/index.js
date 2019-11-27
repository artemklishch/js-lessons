function removeDuplicates(array){
    let arr = [];
    for(let i = 0; i < array.length; i++){
        let calc = 0;
        if(arr.length !== 0){  
            for(let j = 0; j < arr.length; j++){
                if(arr[j] === array[i]){
                    calc++;
                }
            }
        }
        if(calc < 1) arr.push(array[i]);
    }
    return arr;
}