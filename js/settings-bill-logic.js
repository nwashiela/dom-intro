function SettingBills() {
    var smsTotal2 = 0;
    var callTotal2 = 0;
    var callCostSet = 0;
    var smsCostSet = 0;
    var warningLevel = 0;
    var criticalLevel = 0;
    
    function setCallCost(callCost) {
        callTotal2 = callCost;
    }
    function getCallCost() {
        return callTotal2;
    }

    function setSmsCost(smsCost) {
        smsTotal2 = smscost;
    }
    function getSmsCost() {
        return smsTotal2;
    }

    function setCriticalValue(theCriticallevel) {
        criticalLevel = theCriticallevel;
    }
    function getCriticalValues() {
        return criticalLevel;
    }

    function setWarningValue(theWarninglevel) {
        warningLevel = theWarninglevel;
    }
    function getWarningValue() {
        return warningLevel
    }

    function makeCalls() {
        if (!hasReachedCriticaLevel()) {
            callCostSet += callTotal2;
        }
    }
    function getTotalCost() {
        return callCostSet + smsCostSet;
    }
    function getTotalCallCost() {
        return callCostSet;
    }
    function getTotalSmsCost() {
        return smsCostSet;
    }

    function sendSms() {
        if (!hasReachedCriticaLevel()) {
            smsCostSet += smsTotal2;
        }
    }
    function hasReachedCriticaLevel() {
        return getTotalCallCost() >= getCriticalValues();
    }
    function totalClassName() {
        if (!hasReachedCriticaLevel()) {
            return "critical";
        }
        if (getTotalCallCost() >= getCriticalValues()) {
            return "warning";
        }
    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setCriticalValue,
        getCriticalValues,
        setWarningValue,
        getWarningValue,
        makeCalls,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        hasReachedCriticaLevel,
        totalClassName,
    }

}