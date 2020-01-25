export const getUserBlogs = async arrayOfUsers => {
    try{
        const pr = await new Promise((resolve,reject) => {
            const arr = [];
            arrayOfUsers.forEach(elem => {
                fetch(`https://api.github.com/users/${elem}`)
                    .then(response => response.json())
                    .then(res => {
                        return arr.push(res.blog);
                    });   
            });     
            if(arr.length === 0){
                resolve(arr);
            }else reject(new Error('There aren`t elements'));
        });
        return pr;
    }catch(e){
        console.log(e.message);
    }
    
};
// getUserBlogs(['google', 'facebook', 'gaearon']);
    

