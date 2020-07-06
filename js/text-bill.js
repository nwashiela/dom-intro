document.addEventListener('DOMContentLoaded', function () {
    // get a reference to the textbox where the bill type is to be entered
    var billTypeTextStr = document.querySelector(".billTypeText");

    //get a reference to the add button
    var addToBillBtn = document.querySelector(".addToBillBtn");
    //create a variable that will keep track of the total bill
    var callTotalOneEl = document.querySelector(".callTotalOne");
    var smsTotalOneEl = document.querySelector(".smsTotalOne");
    var totalOneElement = document.querySelector(".totalOne");

    //add an event listener for when the add button is pressed

    //in the event listener check if the value in the bill type textbox is 'sms' or 'call'
    // * add the appropriate value to the running total
    // * add nothing for invalid values that is not 'call' or 'sms'.
    // * display the latest total on the screen

    var text_Bill = textBillFactory();
    addToBillBtn.addEventListener('click',
        function () {
            //remove whitespace using trim
            var billTypeEntered = billTypeTextStr.value.trim();

            //calling functions from factory function
            var total = text_Bill.textBillTotal(billTypeEntered);
            var sms = text_Bill.smsCostTotal();
            var call = text_Bill.callCostTotal();

            //printing to html
            callTotalOneEl.innerHTML = call;
            smsTotalOneEl.innerHTML = sms;
            totalOneElement.innerHTML = total;

            //adding colors to values
            if (total >= 50) {
                totalOneElement.classList.add("danger");
            }
            else if (total >= 30) {
                totalOneElement.classList.add("warning");
            }
        }
    );
});