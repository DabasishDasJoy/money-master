document.getElementById('btn-calculate').addEventListener('click', function () {
    if (isNaN(getInputFieldValueById('income')) || isNaN(getInputFieldValueById('food')) ||
        isNaN(getInputFieldValueById('rent')) ||
        isNaN(getInputFieldValueById('clothes'))) {
        alert("Field should not be left empty!");
    }
    else if (getInputFieldValueById('income') < 0 ||
        getInputFieldValueById('food') < 0 || getInputFieldValueById('rent') < 0 ||
        getInputFieldValueById('clothes') < 0) {
        alert("Field value cannot be negative!");
    }
    else {
        const totalExpense = getInputFieldValueById('food') + getInputFieldValueById('rent') + getInputFieldValueById('clothes');

        if (totalExpense > getInputFieldValueById('income')) {
            alert('Total expense should not be exceed total income');
        }
        else {
            document.getElementById('total-expense').innerText = totalExpense;

            const balance = getInputFieldValueById('income') - getElementValueById('total-expense');
            document.getElementById('balance').innerText = balance;
        }
    }
});

document.getElementById('btn-save').addEventListener('click', function () {

    if (getInputFieldValueById('save') > 100) {
        alert('You cannot save more than 100%');
    }
    else if(getInputFieldValueById('save') < 0){
        alert('Input should not be left negative');
    }
    else {
        const saveAmount = getInputFieldValueById('income') * (getInputFieldValueById('save') / 100);
        if (saveAmount > getElementValueById('balance')) {
            alert('You cannot save more than your balance');
        }
        else {
            document.getElementById('saving-amount').innerText = saveAmount;

            document.getElementById('remaining-balance').innerText = getElementValueById('balance') - (getInputFieldValueById('income') * (getInputFieldValueById('save') / 100));
        }
    }
});