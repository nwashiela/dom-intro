describe("Radio_Button widget", function () {

    it("should return cost for one call", function () {
        var countRadiobutton = radiobuttons();
        countRadiobutton.logiccode("call");
        
        assert.equal(countRadiobutton.getcall(), 2.75);
    })
    it("should return cost for one sms", function () {
        var countRadiobutton = radiobuttons();
        countRadiobutton.logiccode("sms");

        assert.equal(countRadiobutton.getsms(), 0.75);
    })
    it("should return Totalcost for two smses and two calls", function () {
        var countRadiobutton = radiobuttons();
        countRadiobutton.logiccode("sms");
        countRadiobutton.logiccode("sms");
        countRadiobutton.logiccode("call");
        countRadiobutton.logiccode("call");

        assert.equal(countRadiobutton.getsms(), 1.50);
        assert.equal(countRadiobutton.getcall(), 5.50);
        assert.equal(countRadiobutton.getTotals(), 7.00);
    })

})