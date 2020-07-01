var smsTotal = 0;
var callTotal = 0;
function addToBillBtnClicked(){
    var thesmsTotal = 0;
    function setBillsmsTotal(smsTotal){
        thesmsTotal  = smsTotal
    }
    function getBillsmsTotal(){
        return smsTotal;
    }
    return (){
        setBillsmsTotal;
        getBillsmsTotal;
    }
}