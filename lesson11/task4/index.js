const countOccurrences = (string, substring) => {
    if(substring.length === 0) return null;
    let calc = 0;
    let position = 0;
    let temp;
    while(true){
        temp = string.indexOf(substring, position);
        if(temp === -1)break;
        calc++;
        position += temp;
    }
    return calc;
};

// const str = "My friend, hello, hello buddy, hello!";
// const sub_str = "hello";
// console.log(countOccurrences(str, sub_str));