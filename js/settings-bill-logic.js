function SettingBills(){
    var smsTotal2 = 0;
    var callTotal2 = 0;
    var callCostSet = 0;
    var smsCostSet = 0;
    var warningLevel = 0;
    var criticalLevel = 0;
    var totals = 0;
    function settingLogiccode(billItemTypeWithSettings){
        if (billItemTypeWithSettings === "call"){       
            callTotal2 += callCostSet;
            totals += callCostSet;
          }
          else if(billItemTypeWithSettings === "sms"){
            smsTotal2 +=  smsCostSet;
             totals += callCostSet;
        
          }

    }
function setCallCost(callCost){
    callCostSet = callcost;
}
function setSmsCost(smsCost){
    smsCostSet = smscost;
    }
function setTotalCost(mainTotal){
    totals =  mainTotal;
}

 function passCriticalValue(theCriticallevel){
    warningLevel = theCriticallevel;
 }   
function passWarningValue(theWarninglevel){
    criticalLevel = theWarninglevel;
 }   
function getparamcallcost(){
    return callCost;
}
function getparamsmscost(){
    return smscost;
}
function getparammaintotal(){
    return mainTotal;
}
return{
    settingLogiccode,
    setCallCost,
    setSmsCost,
    setTotalCost,
    passCriticalValue,
    passWarningValue,
    getparamcallcost,
    getparamsmscost,
    getparammaintotal,
}
}