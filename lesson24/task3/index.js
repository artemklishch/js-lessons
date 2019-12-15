export const getDiff = (startDate, endDate) => {
    // const deff = Math.abs(endDate - startDate);
    // const days = Math.trunc(deff/1000/60/60/24);
    // const hours = Math.trunc(((deff/1000/60/60/24) - days)*60);
    // const minutes = Math.trunc(((((deff/1000/60/60/24) - days)*60) - hours)*60);
    // const seconds = Math.trunc(((((((deff/1000/60/60/24) - days)*60) - hours)*60) - minutes)*100);
    // return `${days}d ${hours}h ${minutes}m ${seconds}s`;

    const deff = Math.abs(endDate - startDate);
    const days = deff/1000/60/60/24;
    const hours = ((days - Math.trunc(days))*60);
    const minutes = ((hours - Math.trunc(hours))*60);
    const seconds = Math.trunc((minutes - Math.trunc(minutes))*100);
    return `${Math.trunc(days)}d ${Math.trunc(hours)}h ${Math.trunc(minutes)}m ${Math.trunc(seconds)}s`;
};
//console.log(getDiff(new Date(2019,2,5,4,30,20), new Date(2018,0,1,3,25,12)));