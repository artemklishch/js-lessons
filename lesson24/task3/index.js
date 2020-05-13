export const getDiff = (startDate, endDate) => {
    const diff = Math.abs(endDate - startDate);
    const days = parseInt(diff/1000/60/60/24);
    const hours = parseInt((diff/1000/60/60/24 - days)*24);
    const minutes = parseInt(((diff/1000/60/60/24 - days)*24 - hours)*60);
    const seconds = parseInt((((diff/1000/60/60/24 - days)*24 - hours)*60 - minutes)*60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
//console.log(getDiff(new Date(2019,2,5,7,30,0), new Date(2019,0,1,2,15,10)));