function textBillFactory () 
{
	var callTotal = 0;
    var smsTotal = 0;

    function textBillTotal(billType)
	{
		    // get the value entered in the billType textfield
		   
		    // update the correct total
		    if (billType === "call"){
		        callTotal += 2.75;
		        callTotal.toFixed(2);
		    }
		    else if (billType === "sms"){
		        smsTotal += 0.75;
		        smsTotal.toFixed(2);
		    }

		    var totalCosttext = callTotal + smsTotal;
		 
		    return totalCosttext.toFixed(2);
	}

	function callCostTotal () {
		return callTotal.toFixed(2);
		
	}

	function smsCostTotal () {
		return  smsTotal.toFixed(2);
		
	}

	return {
			textBillTotal,
			callCostTotal,
			smsCostTotal
	}

}