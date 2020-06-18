 // get a reference to the sms or call radio buttons
var SettingBillAddBtn = document.querySelector(".SettingBillAddBtn")
var callTotalSettingsStr = document.querySelector(".callTotalSettings")
var smsTotalSettingsStr = document.querySelector(".smsTotalSettings")
var totalSettingsStr = document.querySelector(".totalSettings")
//get a reference to the add button
var updateSettingsElem = document.querySelector(".updateSettings")
var callCostSettingEl = document.querySelector(".callCostSetting")
var smsCostSettingEl = document.querySelector(".smsCostSetting")
var warningLevelSettingEl = document.querySelector(".warningLevelSetting")
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting")
//get a reference to the 'Update settings' button
var smsTotal2 = 0;
var callTotal2 = 0;
var callCostSet = 0;
var smsCostSet = 0;
var warningLevel = 0;
var criticalLevel = 0;
var totals = 0;
// create a variables that will keep track of all the settings
function updateMysettings(){
  callCostSet = Number(callCostSettingEl.value);
  smsCostSet = Number(smsCostSettingEl.value);
  warningLevel = Number(warningLevelSettingEl.value);
  criticalLevel = Number(criticalLevelSettingElem.value);
  totalColor()
}

function addMyTotals(){


    var checkSettingBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked"); 
    if(totals < criticalLevel){

    if(checkSettingBtn){
      var billItemTypeWithSettings = checkSettingBtn.value;
    
      if (billItemTypeWithSettings === "call"){       
        callTotal2 += callCostSet;
        totals += callCostSet;
      }
      else if(billItemTypeWithSettings === "sms"){
        smsTotal2 +=  smsCostSet;
        totals += smsCostSet;
    
      }
    }
    callTotalSettingsStr.innerHTML = callTotal2.toFixed(2);
    smsTotalSettingsStr.innerHTML = smsTotal2.toFixed(2);
    

    totalSettingsStr.innerHTML = totals.toFixed(2);
    totalColor();

  } 
}
    function totalColor(){

      totalSettingsStr.classList.remove("danger");
      totalSettingsStr.classList.remove("warning");
      
      if (totals >= criticalLevel){
        totalSettingsStr.classList.add("danger");
      }
      else if(totals >= warningLevel && totals < criticalLevel){
        totalSettingsStr.classList.add("warning");
      }
      
      }
      
SettingBillAddBtn.addEventListener("click", addMyTotals);
updateSettingsElem.addEventListener("click", updateMysettings);
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.