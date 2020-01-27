export const getUsersBlogs = async arrayOfUsers => {
    const arrayOfPromises = arrayOfUsers
        .map(userId => {
            const responsePromise = fetch(`https://api.github.com/users/${userId}`);
            const userDataPromise = responsePromise
                .then(response => response.json());
            return userDataPromise;
        });
    const usersData = await Promise.all(arrayOfPromises);
    const urlData = usersData.map(elem => elem = elem.blog);
    return urlData;
};
// getUsersBlogs(['google', 'facebook', 'gaearon'])
//     .then(res => console.log(res));    
