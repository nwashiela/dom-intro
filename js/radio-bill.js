// get a reference to the sms or call radio buttons

var smsTotalTwoEl = document.querySelector(".smsTotalTwo");
var callTotalTwoEl = document.querySelector(".callTotalTwo");

//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill
var totalTwoEl = document.querySelector(".totalTwo");

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const Bills = radiobuttons();

radioBillAddBtn.addEventListener("click",
  function () {
    var checkRBAB = document.querySelector("input[name='billItemType']:checked");
    if (checkRBAB) {
      var billItemType = checkRBAB.value;
      Bills.logiccode(billItemType);

    }
    callTotalTwoEl.innerHTML = Bills.getcall();
    smsTotalTwoEl.innerHTML = Bills.getsms();
    totalTwoEl.innerHTML = Bills.getTotals();

    totalTwoEl.classList.add(Bills.crimsonAndOrange());
  });
