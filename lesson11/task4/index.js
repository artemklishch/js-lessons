// const countOccurrences = (string, substring) => {
//     if(substring.length === 0) return null;
//     let calc = 0;
//     let position = 0;
//     while(string.indexOf(substring, position) !== -1){
//         position += string.indexOf(substring, position);
//         calc++;
//     }
//     return calc;
// };

const countOccurrences = (string, substring) => {
    if(substring.length === 0) return null;
    let calc = 0;
    let position = -1;
    while((position = string.indexOf(substring, position+1)) !== -1){
        calc++;
    }
    return calc;
};


// const str = "My friend, hello, buddy, hello!";
// const sub_str = "hello";
// console.log(countOccurrences(str, sub_str));