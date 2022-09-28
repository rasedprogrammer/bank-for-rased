document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInputField = document.getElementById("withdraw");
  const withdrawInputFieldString = withdrawInputField.value;
  const newWithdrawAmount = parseFloat(withdrawInputFieldString);
  withdrawInputField.value = "";

  if(isNaN(newWithdrawAmount)){
	alert("Please Provide Number");
	return;
  }else if(newWithdrawAmount > previouseBalanceTotal){
	alert("Please Provide Under The Total Balance")
	return;
  }

  // Withdraw Total
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const withdrawTotalElementString = withdrawTotalElement.innerText;
  const previousWithdrawAmount = parseFloat(withdrawTotalElementString);
  const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //   Total Balance Reduceing
  const balanceTotalElement = document.getElementById("balance-total");
  const previouseBalanceTotalString = balanceTotalElement.innerText;
  const previouseBalanceTotal = parseFloat(previouseBalanceTotalString);

  
  const newBalanceTotal = previouseBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
