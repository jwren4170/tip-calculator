const totalBill = document.getElementById('bill-total');
const numOfPeople = document.getElementById('num-of-people');
const customTip = document.getElementById('custom-tip');
const tipPerPerson = document.getElementById('tip-per-person');
const totalPerPerson = document.getElementById('total-per-person');
const resetBtn = document.getElementById('reset');
const percentBtns = document.querySelectorAll('button');

// Calculate Tip When Click On Tip Percentage Button
percentBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        let tipvalue = button.getAttribute('data-tip');

        if (totalBill.value === '') return;

        numOfPeople.addEventListener('blur', () => {
            calculateTip(
                parseFloat(totalBill.value),
                parseFloat(tipvalue),
                parseInt(numOfPeople.value)
            );
        });
    });
});

// //Calculate Tip When User Give Custom Tip Percentage Input
customTip.addEventListener('blur', (e) => {
    if (totalBill.value === '') return;

    numOfPeople.addEventListener('blur', () => {
        calculateTip(
            parseFloat(totalBill.value),
            parseFloat(e.target.value),
            parseInt(numOfPeople.value)
        );
    });
});

// //Calculate Tip
function calculateTip(totalBill, tipvalue, numOfPeople) {
    let tip = (totalBill / numOfPeople) * tipvalue;
    tip = tip.toFixed(2);

    let totalAmount = totalBill / numOfPeople;
    totalAmount = totalAmount.toFixed(2);

    tipPerPerson.value = `$${tip}`;
    totalPerPerson.value = `$${parseFloat(totalAmount) + parseFloat(tip)}`;
}

// //Reset Everything
resetBtn.addEventListener('click', resetEverything);
function resetEverything() {
    totalBill.value = '';
    numOfPeople.value = '';
    customTip.value = '';
}

export { calculateTip, resetEverything, totalBill, numOfPeople };