// export const getUsersBlogs = async arrayOfUsers => {
//     const arrayOfPromises = arrayOfUsers
//         .map(userId => {
//             const responsePromise = fetch(`https://api.github.com/users/${userId}`);
//             const userDataPromise = responsePromise
//                 .then(response => response.json());
//             return userDataPromise;
//         });
//     const usersData = await Promise.all(arrayOfPromises);
//     const urlData = usersData.map(elem => elem = elem.blog);
//     return urlData;
// };







export const getUsersBlogs = async arrayOfUsers => {
    try{
        const arrayOfPromises = await arrayOfUsers
            .map(userId => {
               return fetch(`https://api.github.com/users/${userId}`)
                    .then(response => {
                        if(response.ok){
                            const promise = response.json();
                            promise
                                .then(elem => tempElem = elem.blog)
                                .then(res => userId = res);
                        }
                    });
            });
        console.log(arrayOfPromises);
        
    }catch(err){
        throw new Error(`Failed to load data`);
    }
};
getUsersBlogs(['google', 'facebook', 'gaearon'])
    .then(res => console.log(res));    
