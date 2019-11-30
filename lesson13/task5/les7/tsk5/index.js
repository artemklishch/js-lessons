export const squareArray = arr => 
    (!Array.isArray(arr) || arr.length === 0) ? null : arr
    .map(elem => elem * elem);