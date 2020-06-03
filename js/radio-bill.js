// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

// var billItemTypyeStr = document.querySelector(".billItemType");

var totalTwoEl = document.querySelector(".totalTwo");

var smsTotalTwoEl = document.querySelector(".smsTotalTwo");

var callTotalTwoEl = document.querySelector(".callTotalTwo");

var smsTotal1 = 0;
var callTotal1 = 0;

function keepOnAdding(){
  
  var checkRBAB = document.querySelector("input[name='billItemType']:checked"); 
if(checkRBAB){
  var billItemType = checkRBAB.value;

  if (billItemType === "call"){       
    callTotal1 += 2.75;
  }
  else if(billItemType === "sms"){
   smsTotal1 += 0.75;
    
  }
}
  callTotalTwoEl.innerHTML = callTotal1.toFixed(2);
  smsTotalTwoEl.innerHTML = smsTotal1.toFixed(2);
  
  var totals = callTotal1 + smsTotal1;
  totalTwoEl.innerHTML = totals.toFixed(2);
  
  if (totals >= 50){
totalTwoEl.classList.add("danger");
}
else if(totals >= 30){
totalTwoEl.classList.add("warning");
}
}

radioBillAddBtn.addEventListener("click", keepOnAdding);
