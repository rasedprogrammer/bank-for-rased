document.getElementById('deposit-btn').addEventListener('click', function (){
	const depositField = document.getElementById('deposit');
	const newDepositAmountString = depositField.value;
	const newDepositAmount = parseFloat(newDepositAmountString);

	// Deposit Balance Total
	const depositTotalElement = document.getElementById('deposit-total');
	const previouseDepositTotalString = depositTotalElement.innerText;
	const previouseDepositTotal = parseFloat(previouseDepositTotalString);
	const currentDepositTotal = previouseDepositTotal + newDepositAmount;
	depositTotalElement.innerText = currentDepositTotal;
	depositField.value = '';

	// Get Balance Total
	const balanceTotalElement = document.getElementById('balance-total');
	const previouseBalanceTotalString = balanceTotalElement.innerText;
	const previouseBalanceTotal = parseFloat(previouseBalanceTotalString);
	const currentBalanceTotal = previouseBalanceTotal + newDepositAmount;
	balanceTotalElement.innerText = currentBalanceTotal;
})