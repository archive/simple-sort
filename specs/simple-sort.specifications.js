describe("Simple Sort Specifications", function(){

    describe("when sorting a json object", function(){
    
        var data;
    
        beforeEach(function(){
            var json = '{"items": [{"name": "Aaa", "value": "1"},{"name": "Bbb", "value": "10"},{"name": "Ccc", "value": "30"}] }';
            data = JSON.parse(json);
        });
        
        it("on a string value with ascending it should sort correctly", function(){
            var toLowerCase = function(value){return value.toLowerCase()};
            var dataSorted = data.items.sort(orderBy("name", true, toLowerCase));

            expect(dataSorted[0].name).toEqual("Aaa");
            expect(dataSorted[1].name).toEqual("Bbb");
            expect(dataSorted[2].name).toEqual("Ccc");
        });
        
        it("on a string value with descending it should sort correctly", function(){
            var toLowerCase = function(value){return value.toLowerCase()};
            var dataSorted = data.items.sort(orderBy("name", false, toLowerCase));

            expect(dataSorted[0].name).toEqual("Ccc");
            expect(dataSorted[1].name).toEqual("Bbb");
            expect(dataSorted[2].name).toEqual("Aaa");
        });        
        
        it("on a number value with ascending it should sort correctly", function(){
            var dataSorted = data.items.sort(orderBy("value", false, parseInt));

            expect(dataSorted[0].value).toEqual("30");
            expect(dataSorted[1].value).toEqual("10");
            expect(dataSorted[2].value).toEqual("1");
        });        
        
    });
    
});