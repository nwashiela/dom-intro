// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var addToBillBtn = document.querySelector(".addToBillBtn");
var billTypeTextStr = document.querySelector(".billTypeText");

var callTotalOneEl = document.querySelector(".callTotalOne");
var smsTotalOneEl = document.querySelector(".smsTotalOne");

var totalOneElement = document.querySelector(".totalOne");

var smsTotal = 0;
var callTotal = 0;

function addToBillBtnClicked(){

   var billTypeText = 
       billTypeTextStr.value
 
if (billTypeText === "call"){
callTotal += 2.75;
}
else if(billTypeText === "sms"){
smsTotal += 0.75;
}
callTotalOneEl.innerHTML = callTotal.toFixed(2);

smsTotalOneEl.innerHTML = smsTotal.toFixed(2);

var totals = callTotal + smsTotal;
totalOneElement.innerHTML = totals.toFixed(2);
 
if (totals >= 50){
totalOneElement.classList.add("danger");
}
else if(totals >= 30){
totalOneElement.classList.add("warning");
}
}
addToBillBtn.addEventListener("click", addToBillBtnClicked);

