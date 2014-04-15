define(['scripts/app/todoApp'], function(TodoApp){
    jasmine.getFixtures().fixturesPath = '.';

    describe("TodoApp", function() {
        beforeEach(function() {
            loadFixtures("index.html")
        })

        it("should be able to add Todo item", function() {
            var todoInput = $("#new-todo")
        });
    });
});
