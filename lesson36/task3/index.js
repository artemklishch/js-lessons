export const getUserBlogs = async arrayOfUsers => {
    return await Promise.all(
        arrayOfUsers.map(element => 
            element = fetch(`https://api.github.com/users/${element}`))
    )
    .then(array => {
        const arr = [];
        array.forEach(async elem => {
                const a = await elem.json();
                arr.push(a.blog);
        });
       return arr;
    });
};
// getUserBlogs(['google', 'facebook', 'gaearon'])
//     .then(res => console.log(res));    
