//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
function calculateBtnWhenclicked(){
const billTotalElement = document.querySelector(".billTotal");
const billStringField = document.querySelector(".billString");
const billTotalSpan = document.querySelector(".total");

var calculationinstants = countingCalculateBills();
var billString = billStringField.Value;

calculationinstants.billTotal(billString);
billTotalElement.inner.HTML = calculationinstants.addsmscall().toFixed(2);

billTotalElement.classList.remove("danger");
billTotalElement.classList.remove("warning");
billTotalElement.classList.add(calculationinstants,TotalColor());
}
calculateBtn.addEventListener ("click",  calculateBtnClicked);

