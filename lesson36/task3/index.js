export const getUserBlogs = async arrayOfUsers => {
    const arrayOfPromises = arrayOfUsers
        .map(userId => {
            const responsePromise = fetch(`http://api.github.com/users/${userId}`);
            const userDataPromise = responsePromise
                .then(response => response.json());
            return userDataPromise;
        });
    const usersData = await Promise.all(arrayOfPromises);
    const urlData = await usersData.map(elem => elem = elem.blog);
    return urlData;
    
};
// getUserBlogs(['google', 'facebook', 'gaearon'])
//     .then(res => console.log(res));    
