module.exports = function(grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
        jasmine : {
            src : 'scripts/**/*.js',
            options : {
                specs : 'test/**/*.js',
                keepRunner: true,
                template: require('grunt-template-jasmine-requirejs'),
                templateOptions: {
                    requireConfigFile: 'scripts/require-config.js',
                    requireConfig: {
                        paths: {
                            "require-config": 'scripts/require-config'
                        }
                    }
                }
            }
        },
        watch : {
            files : ['scripts/**/*.js', '!bower_components/**', '!node_modules/**'],
            tasks: ['jasmine']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
