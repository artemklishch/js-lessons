// export const getUserBlogs = async arrayOfUsers => {
//         return await Promise.all(
//             arrayOfUsers.map(async element => element = await fetch(`https://api.github.com/users/${element}`))        
//         )
//         .then(async arrayOfPromises => {
//             const arr = [];
//             arrayOfPromises.forEach(async elem => {
//                 const json = await elem.json();
//                 arr.push(json.blog);
//             });
//             return arr;
//         });
// };
// getUserBlogs(['google', 'facebook', 'gaearon'])
//     .then(res => console.log(res));    




export const getUserBlogs = async arrayOfUsers => {
    return await Promise.all(
        arrayOfUsers.map(async element => element = await fetch(`https://api.github.com/users/${element}`))        
    )
    .then(async arrayOfPromises => {
        arrayOfPromises.map(async (elem,index) => {
            const json = await elem.json();
            const value = await json.blog;
            arrayOfPromises.splice(index,1,value);
        });
        return arrayOfPromises;
    });
};
getUserBlogs(['google', 'facebook', 'gaearon'])
    .then(res => console.log(res));    