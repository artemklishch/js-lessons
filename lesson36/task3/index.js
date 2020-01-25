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
    const arr = [];
    arrayOfUsers.forEach(elem => arr.push(fetch(`https://api.github.com/users/${elem}`)));
    return await Promise.all(arr)
        .then(async array => {
            const resArr = [];
            array.forEach(async elem => {
                elem = await elem.json(); 
                resArr.push(elem.blog);
            });
            return await resArr;
        });
};
getUserBlogs(['google', 'facebook', 'gaearon'])
    .then(res => console.log(res));
    

   

    