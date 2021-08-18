
// handle Deposite button
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('Deposit-input');
    const newDepositAmount = depositInput.value;
    const depositTotal = document.getElementById('deposit-total');
    //console.log(depositTotal.innerText);
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousbalanceTotal + newDepositTotal ;
    balanceTotal.innerText = newBalanceTotal;



    // clear input amount
    depositInput.value = '';
})

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    withdrawTotal.innerText = newWithdrawTotal;
   
    // Update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousbalanceText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceText);

    const newBalanceTotal = previousbalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    
     //clear withdraw input
     withdrawInput.value = '';
})