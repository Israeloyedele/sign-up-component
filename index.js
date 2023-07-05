const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


const fnError = document.querySelector(".fn");
const fn2Error = document.querySelector(".fn2");
const lnError = document.querySelector(".ln");
const ln2Error = document.querySelector(".ln2");
const emError = document.querySelector(".em");
const em2Error = document.querySelector(".em2");
const pwError = document.querySelector(".pw");
const pw2Error = document.querySelector(".pw2");




form.addEventListener('submit', e => {

    if(
        firstName.value.trim().match(/^[a-z]+$/i)
        &&
        lastName.value.trim().match(/^[a-z]+$/i)
        &&
        email.value.trim().match(/^[A-Za-z\._\-0-9]+[@][A-Za-z]+[\.][a-z]{2,4}$/i)
        &&
        password.value.trim().match(/^[a-zA-Z0-9\$\!\@\#\%]{8,}$/)
    ){
        return true;
    }else {
        e.preventDefault();
        if (!firstName.value.trim().match(/^[a-z]+$/i)){
            firstName.classList.add('error');
            fnError.classList.add('error');
            fn2Error.classList.add('error');
            firstName.placeholder = '';
        } else {
            firstName.classList.remove('error');
            fnError.classList.remove('error');
            fn2Error.classList.remove('error');
        };
    
        if (!lastName.value.trim().match(/^[a-z]+$/i)){
            lastName.classList.add('error');
            lnError.classList.add('error');
            ln2Error.classList.add('error');
            lastName.placeholder = '';
        } else {
            lastName.classList.remove('error');
            lnError.classList.remove('error');
            ln2Error.classList.remove('error');
        };
    
        if (!email.value.trim().match(/^[A-Za-z\._\-0-9]+[@][A-Za-z]+[\.][a-z]{2,4}$/i)){
            const styleEl = document.createElement('style');
            const redPlace = document.createTextNode( " #email::placeholder { color: #ff7a7a} ");
            styleEl.appendChild(redPlace);
            document.head.appendChild(styleEl);
    
            email.classList.add('error');
            emError.classList.add('error');
            em2Error.classList.add('error');
            email.placeholder = 'email@example.com';
        } else {
            email.classList.remove('error');
            emError.classList.remove('error');
            em2Error.classList.remove('error');
            document.head.removeChild(styleEl);
        };
    
        if (!password.value.trim().match(/^[a-zA-Z0-9\$\!\@\#\%]{8,}$/)){
            password.classList.add('error');
            pwError.classList.add('error');
            pw2Error.classList.add('error');
            password.placeholder = '';
        } else {
            password.classList.remove('error');
            pwError.classList.remove('error');
            pw2Error.classList.remove('error');
        }
    }
});