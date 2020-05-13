function swap(arr){
    const [start, ...swapArr] = arr;
    return [...swapArr, start];
}