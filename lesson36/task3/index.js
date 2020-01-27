export const getUserBlogs = async arrayOfUsers => {
    const pr = await Promise.all(
        arrayOfUsers.map(element => element = fetch(`https://api.github.com/users/${element}`))
    );
    const arr = [];
    pr.forEach(async elem => {
        const { blog } = await elem.json(); 
        arr.push(blog);
    });
    return arr;
};
getUserBlogs(['google', 'facebook', 'gaearon'])
    .then(res => console.log(res));    
