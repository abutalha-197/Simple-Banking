
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountText = parseFloat(inputAmountText);
    inputField.value = '';
    return amountText;
}

function updateTotalField(id,newDepositAmount){
    const depositTotal = document.getElementById(id);
    const depositTotalText = depositTotal.innerText;
    const depositTotalCurrent = parseFloat(depositTotalText);
    depositTotal.innerText = newDepositAmount + depositTotalCurrent;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {
  
    const newDepositAmount = getInputValue('Deposit-input');
    if(newDepositAmount>0){
        updateTotalField('deposit-total',newDepositAmount);
        updateBalance(newDepositAmount,true); 
    } 
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount>0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total',withdrawAmount);
        updateBalance(withdrawAmount,false); 
    }  
    if(withdrawAmount > currentBalance){
        alert("Insufficient Balance!!");
    }
})

