document.getElementById('btn-calculate').addEventListener('click', function(){
    const totalExpense = getInputFieldValueById('food') + getInputFieldValueById('rent') + getInputFieldValueById('clothes');

    document.getElementById('total-expense').innerText = totalExpense;

    const balance = getInputFieldValueById('income') - getElementValueById('total-expense');
    document.getElementById('balance').innerText = balance;
});