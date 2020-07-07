describe("Radio_Button widget", function () {

    it("should return cost for one call", function () {
        var countRadiobutton = radiobuttons();
        countRadiobutton.getsms();
        
        assert.equal(countRadiobutton.getTotals(), 2.75);
    })
    it("should return cost for one sms", function () {
        var countRadiobutton = radiobuttons();
        countRadiobutton.getTotals("sms");

        assert.equal(countRadiobutton.getsms(), 0.75);
    })
})