/*global require*/
'use strict';

require(['require-config'], function() {
    require(['scripts/app/todoApp'], function(TodoApp) {
        new TodoApp().run();
    });
});
