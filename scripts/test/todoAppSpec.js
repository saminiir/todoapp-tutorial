require(['scripts/app/todoApp'], function(TodoApp){
    describe("TodoApp", function() {
        it("should be an object", function() {
            expect(typeof TodoApp).toBe("object");
        });

        it("should have start function", function() {
            expect(typeof TodoApp.start).toBe("function");
        });
    });
});
