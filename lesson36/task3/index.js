export const getUserBlogs = async arrayOfUsers => {
        return await Promise.all(
            arrayOfUsers.map(element => element = fetch(`https://api.github.com/users/${element}`)
                .then(response => response.json())
                .then(elem => elem = elem.blog))        
        );
};
// getUserBlogs(['google', 'facebook', 'gaearon'])
//     .then(res => console.log(res));    
