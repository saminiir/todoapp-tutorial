/*global require*/
'use strict';

require(['require-config'], function() {
    require(['scripts/app/todoApp'], function(TodoApp) {
        TodoApp.start();
    });
});
