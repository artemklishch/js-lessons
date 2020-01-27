export const getUsersBlogs = async arrayOfUsers => {
    try{
        const arrayOfPromises = arrayOfUsers
            .map(userId => {
                const responsePromise = fetch(`https://api.github.com/users/${userId}`);
                const userDataResponse = responsePromise;
                if(!userDataResponse.ok){
                    throw new Error(`Failed to load data`);
                }
                const userDataPromise = userDataResponse
                    .then(response => response.json());
                return userDataPromise;
            });
        const usersData = await Promise.all(arrayOfPromises);
        const urlData = usersData.map(elem => elem = elem.blog);
        return urlData;
    }catch(err){
        return err;
    }
    
};
// getUsersBlogs(['google', 'facebook', 'gaearon'])
//     .then(res => console.log(res));    
