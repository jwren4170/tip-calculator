import { totalBill, numOfPeople } from './calc.js';

// validate
const inputTotal = document.querySelector('.form-total input');
const inputPeople = document.querySelector('.form-people input');
const inputAll = document.querySelectorAll('.section-one input');

inputTotal.addEventListener('blur', () => {
    formValidateTotal();
});

inputPeople.addEventListener('blur', () => {
    formValidatePeople();
});

inputAll.forEach(e => {
    e.addEventListener('focus', () => {
        validateRecheck();
    });
});

function formValidateTotal() {
    let errorMsgTotal = document.querySelector('.form-total span');

    if (isNaN(parseFloat(totalBill.value)))
        errorMsgTotal.classList.add('error');
}

function formValidatePeople() {
    let errorMsgPeople = document.querySelector('.form-people span');

    if (isNaN(parseInt(numOfPeople.value)))
        errorMsgPeople.classList.add('error');
}

function validateRecheck() {
    let errorMsg = document.querySelectorAll('.section-one span');

    errorMsg.forEach(msg => {
        msg.classList.remove('error');
    });
}

export { formValidatePeople, formValidateTotal, validateRecheck };