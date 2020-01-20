const userAvatarElem = document.querySelector('.user__avatar'); 
const userNameElem = document.querySelector('.user__name');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
userAvatarElem.src = defaultAvatar;

//https://api.github.com/repos/USERID/REPOID/commits?per_page=100

const renderUserData = userData => {
	const { avatar, name } = userData;
	userAvatarElem.src = avatar;
	userNameElem.textContent = name;
};

const showUserBtnElem = document.querySelector('.name-form__btn');
const userIdInputEelem = document.querySelector('.id-form__input');
const userRepoInputEelem = document.querySelector('.repo-form__input');
const userDaysInputEelem = document.querySelector('.days-form__input');


const forGetUserObject = () => {
    const days = userDaysInputEelem.value;
    const userId = userIdInputEelem.value;
    const repoId = userRepoInputEelem.value;
    getMostActiveDevs({ userId, repoId, days });
};
showUserBtnElem.addEventListener('click', forGetUserObject);

export const getMostActiveDevs = ({ userId, repoId, days }) => {
    const object = { userId, repoId, days };
    let maxCount = 0;
    const startDate = new Date(new Date().setDate(new Date().getDate() - object.days));
    return fetch(`https://api.github.com/repos/${object.userId}/${object.repoId}/commits?per_page=100`)
        .then(response => response.json())
        .then(fullArray => {
            const filteredArray = fullArray
                .map(elem => {
                    return {
                        count: 0,
                        name: elem.commit.author.name,
                        email: elem.commit.author.email,
                        date: new Date(elem.commit.author.date),
                        avatar: elem.author.avatar_url,
                    }
                })
                .filter(elem => elem.date > startDate);
            filteredArray
                    .map(elem => {
                        for(let j = 0; j < filteredArray.length; j++){
                            if(elem.name === filteredArray[j].name){
                                elem.count++;
                            }
                        }
                    });
            for(let i = 0; i < filteredArray.length; i++){
                if(maxCount < filteredArray[i].count){
                    maxCount = filteredArray[i].count;
                }
            }
            const tempArr = filteredArray
            .filter(elem => elem.count === maxCount);
            const arr = [];
            for(let i = 0; i < tempArr.length; i++){
                if(arr.length > 0){
                    for(let j = 0; j < arr.length; j++){
                        if(tempArr[i].name === arr[j].name){
                            continue;
                        }else arr.push(tempArr[i]);
                    }
                }else arr.push(tempArr[i]);
            }
            arr.forEach(elem => {
                renderUserData(elem);
            })
            arr.map(elem => {
                delete elem.avatar;
                delete elem.date;
            })
            return arr;
        })
        .then(res => console.log(res));
};
