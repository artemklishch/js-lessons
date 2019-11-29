const countOccurrences = (string, substring) => {
    if(substring.length === 0) return null;
    let calc = 0;
    let position = -1;
    while((position = string.indexOf(substring, position+1)) !== -1){
        calc++;
    }
    return calc;
};