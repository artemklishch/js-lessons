const reverseArray = arr => (!Array.isArray(arr)) ? null : arr
    .slice(arr)    
    .reverse(elem => elem * elem);