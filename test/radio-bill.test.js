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
    it ("should return crimson which is warning when it reach 30", function(){
        var textBill1 = radiobuttons();
        textBill1.logiccode("sms");
        textBill1.logiccode("call");
        textBill1.logiccode("sms");
        textBill1.logiccode("call");
        textBill1.logiccode("sms");
        textBill1.logiccode("call");
        textBill1.logiccode("sms");
        textBill1.logiccode("call");
        textBill1.logiccode("sms");
        textBill1.logiccode("call");
        textBill1.logiccode("sms");
        textBill1.logiccode("call");
        textBill1.logiccode("sms");
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("sms");
        textBill1.logiccode("call");
        textBill1.logiccode("sms");
        textBill1.logiccode("call");

        assert.equal(textBill1.crimsonAndOrange(), "warning");
        assert.equal(textBill1.getTotals(), 34.25)
    });
    it ("should return danger when it reach 50", function(){
        var textBill1 = radiobuttons();
        textBill1.logiccode("sms");
        textBill1.logiccode("sms");
        textBill1.logiccode("sms");
        textBill1.logiccode("sms");
        textBill1.logiccode("sms");
        textBill1.logiccode("sms");
        textBill1.logiccode("sms");
        textBill1.logiccode("sms");
        textBill1.logiccode("sms"); 

        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call"); 
        
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call");
        textBill1.logiccode("call"); 
 
        assert.equal(textBill1.crimsonAndOrange(),"danger");
        assert.equal(textBill1.getTotals(), 56.25);
    });

})