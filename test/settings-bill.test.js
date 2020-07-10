describe("The SettingBills",function(){

    it("should be able to set callCost", function(){
        let billWithSettingsONE = SettingBills();

        billWithSettingsONE.getCallCost("call");
        assert.equal(billWithSettingsONE.getCallCost(), 2.50);

    });
    it("should be able to set smsCost", function(){
    let billWithSettingsTwo = SettingBills();

    billWithSettingsTwo.getSmsCost(2.50);
    assert.equal(billWithSettingsONE.getSmsCost(), 2.50);
    })

})











    // 
