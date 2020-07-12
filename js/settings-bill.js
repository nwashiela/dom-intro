// get a reference to the sms or call radio buttons
var callTotalSettingsStr = document.querySelector(".callTotalSettings")
var smsTotalSettingsStr = document.querySelector(".smsTotalSettings")
//get a reference to the add button
var callCostSettingEl = document.querySelector(".callCostSetting")
var smsCostSettingEl = document.querySelector(".smsCostSetting")
var warningLevelSettingEl = document.querySelector(".warningLevelSetting")
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting")
//get a reference to the 'Update settings' button
// create a variables that will keep track of all the settings
var SettingBillAddBtn = document.querySelector(".SettingBillAddBtn")
var updateSettingsElem = document.querySelector(".updateSettings")
var totalSettingsStr = document.querySelector(".totalSettings")
//writinng instance here
var settingsAndBillTotal = SettingBills();

function updateMysettings() {
  //included instance to the code
  settingsAndBillTotal.setCallCost(Number(callCostSettingEl.value));
  settingsAndBillTotal.setSmsCost(Number(smsCostSettingEl.value));
  settingsAndBillTotal.setWarningValue(Number(warningLevelSettingEl.value));
  settingsAndBillTotal.setCriticalValue(Number(criticalLevelSettingElem.value));
}

function addMyTotals() {
  var checkSettingBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkSettingBtn) {
    var billItemTypeWithSettings = checkSettingBtn.value;
    if (billItemTypeWithSettings === "call") {
      settingsAndBillTotal.makeCalls();
    }
    else if (billItemTypeWithSettings === "sms") {
      settingsAndBillTotal.sendSms();
    }
  }
  callTotalSettingsStr.innerHTML = settingsAndBillTotal.getTotalCallCost().toFixed(2);
  smsTotalSettingsStr.innerHTML = settingsAndBillTotal.getTotalSmsCost().toFixed(2);
  totalSettingsStr.innerHTML = settingsAndBillTotal.getTotalCost().toFixed(2);
  totalColor();
}

function totalColor() {
  totalSettingsStr.classList.remove("warningLevel");
  totalSettingsStr.classList.remove("criticalLevel");
  totalSettingsStr.classList.add(settingsAndBillTotal.totalClassName());
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