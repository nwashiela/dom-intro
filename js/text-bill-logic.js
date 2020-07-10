function textBillFactory() {
	var callTotal = 0;
	var smsTotal = 0;
	var totalCosttext = 0;
	function textBillTotal(billType) {
		// get the value entered in the billType textfield

		// update the correct total
		if (billType === "call") {
			callTotal += 2.75;
		}
		else if (billType === "sms") {
			smsTotal += 0.75;
		}

		totalCosttext = callTotal + smsTotal;

		return totalCosttext.toFixed(2);
	}

	function callCostTotal() {
		return callTotal.toFixed(2);

	}

	function smsCostTotal() {
		return smsTotal.toFixed(2);

	}

	function getTotals() {
		return totalCosttext;
	}
	function setColors() {
		if (getTotals() >= 50) {
			return "danger";
		}
		else if (getTotals() >= 30) {
			return "warning";
		}
	}


	return {
		textBillTotal,
		callCostTotal,
		smsCostTotal,
		getTotals,
		setColors
	}
}