// get a reference to the sms or call radio buttons
var SettingBillAddBtn = document.querySelector(".SettingBillAddBtn")
var callTotalSettingsStr = document.querySelector(".callTotalSettings")
var smsTotalSettingsStr = document.querySelector(".smsTotalSettings")
var totalSettingsStr = document.querySelector(".totalSettings")
//get a reference to the add button
var updateSettings = document.querySelector(".updateSettings")
var callCostSetting = document.querySelector(".callCostSetting")
var smsCostSetting = document.querySelector(".smsCostSetting")
var warningLevelSetting = document.querySelector(".warningLevelSetting")
var criticalLevelSetting = document.querySelector(".criticalLevelSetting")
//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings
function updateMysettings(){




}
// create a variables that will keep track of all three totals.
var smsTotal2 = 0;
var callTotal2 = 0;

function addMyTotals(){
    var checkSettingBtn = document.querySelector("input[name='billItemType']:checked"); 
    if(checkSettingBtn){
      var billItemType = checkSettingBtn.value;
    
      if (billItemType === "call"){       
        callTotal2 += 2.75;
      }
    }
    callTotalSettingsStr.innerHTML = callTotal2.toFixed(2);
    smsTotalSettingsStr.innerHTML = smsTotal2.toFixed(2);
    
    var totals = callTotal2 + smsTotal2;
    totalSettingsStr.innerHTML = totals.toFixed(2);
    
    if (totals >= 50){
        totalSettingsStr.classList.add("danger");
  }
  else if(totals >= 30){
    totalSettingsStr.classList.add("warning");
  }
  }
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed
SettingBillAddBtn.addEventListener("click", addMyTotals);
updateSettings.addEventListener("click", updateMysettings);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
