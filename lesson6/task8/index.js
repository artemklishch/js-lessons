// function uniqueCount(array){
//     let arr = [];
//     for(let i = array.length-1; i >= 0; i--){
//         for(let j = 0; j < i; j++){
//             let temp = array[i];
//             let calc = 0;
//             if(arr.length !== 0 && array[j] === temp){
//                 for(let f = 0; f < arr.length; f++){
//                     if(arr[f] === temp){
//                         calc++;
//                     }
//                 }
//             }   
//             if(calc === 0 && array[j] === temp) arr.push(array[j]);
//         }
//     }
//     return arr;
// }

function uniqueCount(array){
    let number = 0;
    for(let i = array.length-1; i >= 0; i--){
        for(let j = 0; j < i; j++){
            if(array[i] === array[j]){
                number++;
            } 
        }
    }
    return number;
}
// console.log(uniqueCount([8, 1,2, 12,13,5,5,6,7, 5,]));