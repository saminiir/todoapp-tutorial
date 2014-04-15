module.exports = function(grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: ''
                }
            }
        },
        jasmine : {
            src : 'scripts/**/*.js',
            options : {
                specs : 'test/**/*.js',
                keepRunner: true,
                template: require('grunt-template-jasmine-requirejs'),
                vendor: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/jasmine-jquery/lib/jasmine-jquery.js'
                ],
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
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('serve', [
        'connect:server',
        'watch'
    ]);
};
