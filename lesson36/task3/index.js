// export const getUserBlogs = async arrayOfUsers => {
//         const pr = await new Promise((resolve,reject) => {
//             const arr = [];
//             if(arrayOfUsers.length === 0){
//                 reject(new Error('There aren`t elements'));
//             }
//             arrayOfUsers.forEach(elem => {
//                 fetch(`https://api.github.com/users/${elem}`)
//                     .then(response => response.json())
//                     .then(res => {
//                         arr.push(res.blog);
//                     });   
//             });
//             resolve(arr);     
//         });
//         return pr;
// };

export const getUserBlogs = async arrayOfUsers => {
    const pr = await Promise.all(
        arrayOfUsers.map(async element => element = await fetch(`https://api.github.com/users/${element}`))        
    )
    .then(async arrayOfPromises => {
        const arr = [];
        arrayOfPromises.forEach(async elem => {
            const json = await elem.json();
            arr.push(json.blog);
        });
        return arr;
    });
    return pr;
};
// getUserBlogs(['google', 'facebook', 'gaearon'])
//     .then(res => console.log(res));
    

   

    