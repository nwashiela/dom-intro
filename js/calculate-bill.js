document.addEventListener('DOMContentLoaded', function(){

    //get a reference to the calculate button
    var calculateBtnElement = document.querySelector(".calculateBtn");
    //get a reference to the billTotal element
    var billTotalElement = document.querySelector(".billTotal");
    //get a reference to the billString
    var billStringElement = document.querySelector(".billString");
    
    // Dom function
    function calculateBtnClicked(){
    
      // get the string entered in the text Area
      var billString = billStringElement.value;
      //call logic function
      var roundedBillTotal = calculateBillEvent(billString);
      billTotalElement.innerHTML = roundedBillTotal;
    // change color to orange when amount is greater or equal to 20
      if ( roundedBillTotal >= 20){
        billTotalElement.classList.add("warning");
      }
    
      if ( roundedBillTotal < 20){
        billTotalElement.classList.remove("warning");
      }
    // change color to red when amount is greater or equal to 30
          if(roundedBillTotal > 30  ){
        billTotalElement.classList.add("danger");
      }
    
      if(roundedBillTotal < 30  ){
      billTotalElement.classList.remove("danger");
    }
    }
    // add event listener for calculate button
    calculateBtnElement.addEventListener('click', calculateBtnClicked);
    });
    