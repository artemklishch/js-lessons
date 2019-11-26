function uniqueCount(array){
    let arr = [];
    for(let i = array.length-1; i >= 0; i--){
        for(let j = 0; j < i; j++){
            let temp = array[i];
            let calc = 0;
            if(arr.length !== 0 && array[j] === temp){
                for(let f = 0; f < arr.length; f++){
                    if(arr[f] === temp){
                        calc++;
                    }
                }
            }   
            if(calc === 0 && array[j] === temp) arr.push(array[j]);
        }
    }
    return arr;
}