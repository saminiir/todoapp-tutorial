define(['scripts/app/todoApp'], function(TodoApp){
    jasmine.getFixtures().fixturesPath = '.'

    describe("My Feature", function() {
      it("should add numbers", function() {
        expect(1+1).toBe(2)
       })
    })

    describe("TodoApp", function() {
        beforeEach(function() {
            loadFixtures("index.html")
        })

        it("should be able to add Todo item", function() {
            var todoInput = $("#new-todo")

            inputValueAndPressEnter($("#new-todo"), "test")

            expect(todoInput.val()).toBe("")
        })
    })

    function inputValueAndPressEnter(elem, value) {
            var keypress = $.Event('keypress')
            keypress.which = 13 //ENTER keycode

            var element = $(elem)
 
            element.val(value)
 
            element.trigger(keypress)
    }
})
