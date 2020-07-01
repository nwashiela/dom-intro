function countingCalculateBills(){
    var billTotal = 0;
    var sms  = 0;
    var call = 0;

    var warningone = 0;
    var dangerone = 0;
function getsms(){
return sms;
}
function getcall(){
return call;
}
function addsmscall(){
billTotal = call + sms;
return billTotal;
}

function billTotal(billString){
    var billItems = 
        billString.split(",");
    
for (var i=0; i<billItems.length; i++){
var billItem = billItems[i].trim();
if (billItem === "call"){
billTotal += 2.75;
}
else if (billItem === "sms"){
billTotal += 0.75;
}
}
return(billTotal);
}
function TotalColor(roundedBillTotal){
if(addsmscall() >= warningone && addsmscall() < dangerone){
return "warning";
}
    else if(addsmscall() >= dangerone){
        return "danger";
    }
}
return{
    addsmscall,
    getcall,
    getsms,
    TotalColor,
    billTotal,
}
}