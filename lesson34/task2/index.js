const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const nameInputElem = document.querySelector('#name');
const btnElem = document.querySelector('.submit-button');
const errorTextElem = document.querySelector('.error-text');

const pEmail = document.createElement('p');
const pPassword = document.createElement('p');
const pName = document.createElement('p');
const pErrorText = document.createElement('p');
errorTextElem.append(pEmail,pName,pPassword,pErrorText);

const reportValidity = () => {
    const emailP = pEmail.textContent; 
    const nameP = pName.textContent; 
    const passwordP = pPassword.textContent; 
    if(emailP || nameP || passwordP){
        btnElem.setAttribute('disabled','disabled');
    }
    if(!emailP && !nameP && !passwordP){
        btnElem.removeAttribute('disabled');
    }
    if(emailInputElem.value === ''|| nameInputElem.value === ''|| passwordInputElem.value === ''){
        btnElem.setAttribute('disabled','disabled');
    }
};
reportValidity();

const isRequiredPassword = value => value ? undefined : 'Required password';

const isRequiredName = value => value ? undefined : 'Required name';

const isRequiredEmail = value => value ? undefined : 'Required email';
const isEmail= value => value.includes('@') ? undefined : 'Should be an email';

const validatorsByFields = {
    email: [isRequiredEmail, isEmail],
    password: [isRequiredPassword],
    name: [isRequiredName],
};

const validate = (fieldName, value) => {
    const validators = validatorsByFields[fieldName];
    return validators
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join('');
};

const onInputChange = event => {
    pErrorText.textContent = '';
    const typeOfInput = event.target.name;
    const errorText = validate(typeOfInput, event.target.value); 
    pPassword.textContent = errorText;
    reportValidity();
};
nameInputElem.addEventListener('input', onInputChange);
emailInputElem.addEventListener('input', onInputChange);
passwordInputElem.addEventListener('input', onInputChange);

// [...document.querySelectorAll('.form-input')]
//     .forEach(elem => elem.oninput = onInputChange)




















const baseUrl = 'https://crudcrud.com/api/556aa25d52da4a9287a6bd1c6d7f7f31/emailObjects';
const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
        .reduce((acc,[field,value]) => ({...acc, [field]:value}),{});
    const email = formData.email;

    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formData),
    }).then(() => {
        emailInputElem.value = '';
        nameInputElem.value = '';
        passwordInputElem.value = ''; 
        return fetch(baseUrl).then(response => response.json())
            .then(arrayOfUserObjects => {
                const obj = arrayOfUserObjects.find(elem => elem.email === email);
                alert(JSON.stringify(obj, email));
            });
    })
    .catch(error => {
        pErrorText.textContent = 'Failed to create user';
        return new Error(console.log(`${error}`));
    });
}; 
formElem.addEventListener('submit', onFormSubmit);


