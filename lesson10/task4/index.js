const getMaxAbsoluteNumber = arr => 
    (!Array.isArray(arr) || arr.length === 0) ? null : 
    Math.max(...arr.map(num => Math.abs(num)));