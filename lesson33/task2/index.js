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
           return fullArray
                .map(elem => {
                    return {
                        name: elem.commit.author.name,
                        email: elem.commit.author.email,
                        date: new Date(elem.commit.author.date),
                        avatar: elem.author.avatar_url,
                    }
                })
                .filter(elem => elem.date > startDate)
                .sort((a,b) => a.name.localeCompare(b.name));
        })
        .then(filteredDateArray => {
            const arrayWithCount = filteredDateArray
                .reduce((acc, elem) => {
                    let count = 0;
                    filteredDateArray.forEach(element => {
                        if(elem.name === element.name) count++;
                    })
                    filteredDateArray.splice(0,count-1);
                    acc.push({
                        count: count,
                        name: elem.name,
                        email: elem.email,
                        avatar:elem.avatar,
                    });
                    return acc;
                },[]);
            return arrayWithCount;
        })
        .then(arrayWithCount => {
            arrayWithCount.forEach(elem => {
                if(elem.count > maxCount) maxCount = elem.count;
            });
            const filteredArrayOfMaxCommits = arrayWithCount
                .filter(elem => elem.count === maxCount);
            filteredArrayOfMaxCommits.forEach(elem => {
                renderUserData(elem);
                delete elem.avatar;
            });
            return filteredArrayOfMaxCommits;
        })
        .then(res => console.log(res));
};
