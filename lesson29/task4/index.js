// const getRandomNumbers = (length, min, max) => {
//     if(max < min) return null;
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     if(max - min < 0)return null;
//     return Array(length).fill()
//     .map(() => Math.floor(Math.random()*(max-min+1)+min));
// };
const getRandomNumber = (min, max) => max < min
    ? null : Math.floor(Math.random()*(max-min+1)+min);

export const requestUserData = (userId, callback) => {
    const timeSeconds = getRandomNumber(1,3) * 1000;
    if(userId === 'broken'){
        setTimeout(() => callback(null,'Failed to load user data'), timeSeconds);
        return;
    }
    setTimeout(() => callback(null, {
        name: 'John',
        age: 17,
        userId: userId,
        email:'userid777@example.com'
    }), timeSeconds);
};
const onFormUserData = (error, data) => console.log(data);
requestUserData('userid777', onFormUserData);








