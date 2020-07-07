describe("text-Bill widget", function () {

    it("should return cost for two calls", function () {
        var textBill1 = textBillFactory();
        textBill1.textBillTotal("call");
        textBill1.textBillTotal("call");

        assert.equal(textBill1.callCostTotal(), 5.50);
        assert.equal(textBill1.smsCostTotal(), 0.00);
        assert.equal(textBill1.textBillTotal(), 5.50);

    });
    it ("should return cost for two smses", function(){
        var textBill1 = textBillFactory();
        textBill1.textBillTotal("sms");
        textBill1.textBillTotal("sms");

        assert.equal(textBill1.smsCostTotal(), 1.50);
        assert.equal(textBill1.callCostTotal(), 0.00);
        assert.equal(textBill1.textBillTotal(), 1.50);
        
    });
    it ("should return total cost for one sms and one call", function(){
        var textBill1 = textBillFactory();
        textBill1.textBillTotal("sms");
        textBill1.textBillTotal("call");

        assert.equal(textBill1.smsCostTotal(), 0.75);
        assert.equal(textBill1.callCostTotal(), 2.75);
        assert.equal(textBill1.textBillTotal(), 3.50);
        
    });



});