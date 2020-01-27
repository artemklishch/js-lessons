export const getUsersBlogs = async arrayOfUsers => {
    try{
        const arrayOfPromises = arrayOfUsers
        .map(userId => {
            const responsePromise = fetch(`https://api.github.com/user/${userId}`);
            const userDataPromise = responsePromise
                .then(response => response.json());
            return userDataPromise;
        });
        const usersData = await Promise.all(arrayOfPromises);
        const urlData = usersData.map(elem => elem = elem.blog);
        return urlData;
    }catch(err){
        throw new Error(`Failed to load data`);
    }
    
};
// getUsersBlogs(['google', 'facebook', 'gaearon'])
//     .then(res => console.log(res));    
