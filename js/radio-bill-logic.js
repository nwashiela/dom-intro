function radiobuttons() {

  var smsTotal1 = 0;
  var callTotal1 = 0;
  var overall = 0;

  function logiccode(billItemType) {
    if (billItemType === "call") {
      callTotal1 += 2.75;
      overall += 2.75;
    }
    else if (billItemType === "sms") {
      smsTotal1 += 0.75;
      overall += 0.75;
    }
  }
  
  function getsms() {
    return smsTotal1;
  }
  function getcall() {
    return callTotal1;
  }
  function getTotals() {
  //  getsms() + getcall();
    return overall;
  }
function crimsonAndOrange(){
  if (addcolors >= 50){
    return "danger";
  }
  if(addcolors >= 30){
    return "warning";
  }
}

function addcolors(){
  logiccode(billItemType) += crimsonAndOrange() ;
  
}
  return {
    logiccode,
    getsms,
    getcall,
    getTotals,
    crimsonAndOrange,
    addcolors,
  }
}