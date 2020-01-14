export const requestUserData = (userId, callback) => {
    const obj = {
        name: 'Tom',
        age: 18,
        userId:userId,
        email:'ed@df.com'
    };
    if(userId === 'broken'){
        setTimeout(() => callback(null,'Failed to load user data'), 3000); 
    }else setTimeout(() => callback(null,obj), 3000);
    
};
//const onFormUserData = (error, data) => data;

//requestUserData('broken', onFormUserData);




