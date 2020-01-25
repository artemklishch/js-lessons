export const getUserBlogs = async arrayOfUsers => {
        const pr = await new Promise((resolve,reject) => {
            const arr = [];
            if(arrayOfUsers.length === 0){
                reject(new Error('There aren`t elements'));
            }
            arrayOfUsers.forEach(elem => {
                fetch(`https://api.github.com/users/${elem}`)
                    .then(response => response.json())
                    .then(res => {
                        arr.push(res.blog);
                    });   
            });
            resolve(arr);     
        });
        return pr;
};
// getUserBlogs(['google', 'facebook', 'gaearon']);