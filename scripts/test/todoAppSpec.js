require(['scripts/app/todoApp'], function(TodoApp){
    describe("TodoApp", function() {
        it("should be an object", function() {
            expect(typeof TodoApp).toBe("function");
        });

        it("should have render function", function() {
            expect(typeof TodoApp.prototype.render).toBe("function");
        });

        it("should have run function", function() {
            expect(typeof TodoApp.prototype.run).toBe("function");
        });
    });
});
