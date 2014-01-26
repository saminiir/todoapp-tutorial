module.exports = function(grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
        jasmine : {
            src : 'scripts/**/*.js',
            options : {
                specs : 'test/**/*.js'
            }
        },
        watch : {
            files : ['**/*.js', '!bower_components/**', '!node_modules/**'],
            tasks: ['jasmine']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
