describe("SettingsBill widget",function(){

    it("should be able to set and get callCost", function(){
        let billWithSettingsONE = SettingBills();
        billWithSettingsONE.setCallCost(2.50);

        billWithSettingsONE.getCallCost("call");
        assert.equal(billWithSettingsONE.getCallCost(), 2.50);

    });
    it("should be able to set and get smsCost", function(){
    let billWithSettingsTwo = SettingBills();
    billWithSettingsTwo.setSmsCost(3.20);

    billWithSettingsTwo.getSmsCost("sms");
    assert.equal(billWithSettingsTwo.getSmsCost(), 3.20);
    })

    it("should be able to set Warning Level", function(){
        let billWithSettingsONE = SettingBills();
        billWithSettingsONE.setWarningValue(20);

        billWithSettingsONE = SettingBills("call");
        assert.equal(billWithSettingsONE.getWarningValue(), 20)

    })
    it("should be able to set criical Level", function(){
        let billWithSettingsONE = SettingBills();
        billWithSettingsONE.setCriticalValue(20);
        
        billWithSettingsONE = SettingBills("call");
        assert.equal(billWithSettingsONE.getCriticalValues(), 20)

    })
})











    // 
