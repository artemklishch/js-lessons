import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos } from './repos.js';

const defaultUser = {
	avatar_url: 'https://avatars3.githubusercontent.com/u10001',
	name: '',
	location: '',
};
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputEelem = document.querySelector('.name-form__input');

const onSearchUser = () => {
	const userName = userNameInputEelem.value;
	fetchUserData(userName)
		.then(userData => {
			renderUserData(userData);
			return userData.repos_url;
		})
		.then(url => fetchRepositories(url))
		.then(reposList => {
			return renderRepos(reposList);
		})
		.catch(err => {
			alert(err.message);
		});
};
showUserBtnElem.addEventListener('click', onSearchUser);