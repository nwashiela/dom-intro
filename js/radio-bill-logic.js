function radiobuttons() {

  var smsTotal1 = 0;
  var callTotal1 = 0;
  var overall = 0;

  function logiccode(billItemType) {
    if (billItemType === "call") {
      callTotal1 += 2.75;
    }
    else if (billItemType === "sms") {
      smsTotal1 += 0.75;
    }

    overall = callTotal1 + smsTotal1;
    return overall.toFixed(2);
  }

  function getsms() {
    return smsTotal1.toFixed(2);
  }

  function getcall() {
    return callTotal1.toFixed(2);
  }

  function getTotals() {
    //  getsms() + getcall();
    return overall.toFixed(2);
  }

  function crimsonAndOrange() {
    if (getTotals() >= 50) {
      return "danger";
    }
    else if (getTotals() >= 30) {
      return "warning";
    }
  }

  return {
    logiccode,
    getsms,
    getcall,
    getTotals,
    crimsonAndOrange
  }
}