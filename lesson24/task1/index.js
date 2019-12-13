export const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);
    return weekDays[new Date(dateInFuture).getDay()];
};
const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];
// const result = dayOfWeek(new Date(2019,0,1), 14);
// console.log(result);
