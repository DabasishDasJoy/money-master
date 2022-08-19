document.getElementById('btn-calculate').addEventListener('click', function(){
    const totalExpense = getInputFieldValueById('food') + getInputFieldValueById('rent') + getInputFieldValueById('clothes');

    document.getElementById('total-expense').innerText = totalExpense;

    const balance = getInputFieldValueById('income') - getElementValueById('total-expense');
    document.getElementById('balance').innerText = balance;
});

document.getElementById('btn-save').addEventListener('click', function(){

    document.getElementById('saving-amount').innerText = getInputFieldValueById('income') * (getInputFieldValueById('save')/100);

    document.getElementById('remaining-balance').innerText = getElementValueById('balance') - (getInputFieldValueById('income') * (getInputFieldValueById('save')/100));
});