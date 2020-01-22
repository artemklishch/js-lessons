const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const btnElem = document.querySelector('.submit-button');
const errorTextElem = document.querySelector('.error-text');

const reportValidity = () => {
    btnElem.removeAttribute('disabled');
};

const isRequired = value => value 
    ? undefined
    : 'Required';
const isEmail= value => value.includes('@') 
    ? undefined
    : 'Should be an email';

const validatorsByFields = {
    email: [isRequired, isEmail],
    password: [isRequired],
};
const validate = (fieldName, value) => {
    const validators = validatorsByFields[fieldName];
    return validators
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join(', ');
};

const onEmailChange = event => {
    const errorText = validate('email', event.target.value);
    errorTextElem.textContent = errorText;
};

const onPasswordChange = event => {
    const errorText = validate('password', event.target.value);
    errorTextElem.textContent = errorText;
};

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
        .reduce((acc,[field,value]) => ({...acc, [field]:value}),{});
    alert(JSON.stringify(formData));
}; 
formElem.addEventListener('submit', onFormSubmit);




