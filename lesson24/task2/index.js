export const getGreenwichTime = date => formatter.format(date);
const formatter = new Intl.DateTimeFormat('en', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
});
//console.log(getGreenwichTime(new Date(2019,0,1,4,30)));