export const requestUserData = (userId, callback) => {
    
    if(userId !== 'broken'){
        setTimeout(() => callback(null, {
            name: 'Tom',
            age: 18,
            userId:userId,
            email:'ed@df.com'
        }), 3000);
    }else if(userId === 'broken'){
        setTimeout(() => callback(null,'Failed to load user data'), 3000);
    }
    
};
//const onFormUserData = (error, data) => data;
//requestUserData('broken', onFormUserData);




