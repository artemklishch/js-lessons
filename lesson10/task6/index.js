const getRandomNumbers = (length, min, max) => {
    if(max < min) return null;
    min = Math.ceil(min);
    max = Math.floor(max);
    if(max - min < 0)return null;
    return Array(length).fill()
    .map(() => Math.random()*(max-min)+min)
    .map(num => num < 0 ? Math.ceil(num) : Math.floor(num));
};