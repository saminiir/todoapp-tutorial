define([
    'jquery',
    'handlebars'
    ], 
    function ($, Handlebars) {

        function cacheElements() {
            console.log("Caching elements!")
        }

        function bindEvents() {
            console.log("Binding events!")
        }

        function start() {
            cacheElements()
            bindEvents()
        }

        return {
            start: start
        }
    }
);
