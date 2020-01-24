import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultUser = {
	avatar_url: 'https://avatars3.githubusercontent.com/u10001',
	name: '',
	location: '',
};
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputEelem = document.querySelector('.name-form__input');

const onSearchUser = async () => {
	showSpinner();
	cleanReposList();
	const userName = userNameInputEelem.value;
	try {
		const userData = await fetchUserData(userName);
		renderUserData(userData);
		const reposList = await fetchRepositories(userData.repos_url);
		renderRepos(reposList);
	} catch (error) {
		alert(error.message);
	} finally{
		hideSpinner();
	}
};
showUserBtnElem.addEventListener('click', onSearchUser);