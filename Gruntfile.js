module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            assertions: {
                src: 'app/tests/jasmineSpec.js',
                options: {
                    specs: 'app/tests/jasmineSpec.js'
                }
            }
        },
        karma: {
            continuous: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS'] //'Chrome', 'Firefox'
            }
        },
        wiredep: {
            target: {
                src: [
                    'index.html'
                ],
                cwd: '',
                dependencies: true,
                devDependencies: true,
                exclude: [],
                fileTypes: {},
                ignorePath: '',
                overrides: {}
            }
        },
        htmlhint: {
            angular_files: {
                options: {
                    //https://github.com/yaniswang/HTMLHint/wiki/Rules
                    'tag-pair': true
                },
                src: ['app/modules/*/*/tpl/*.html', 'app/modules/*/*/*/tpl/*.html']
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            uses_defaults: ['app/metronic/init.js']
        },
        less: {
            development: {
                files: {
                    "app/css/main.css": "app/css/main.less"
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'app/css/styles.min.css': ['app/css/*.css']
                }
            }
        },
        watch: {
            less: {
                files: ['app/css/*.less'],
                tasks: ['less']
            },
            cssmin: {
                files: ['app/css/*.css'],
                tasks: ['cssmin']
            },
            scripts: {
                files: ['app/metronic/*.js'],
                tasks: ['jshint']
            },
            html: {
                files: ['app/modules/*/*/tpl/*.html', 'app/modules/*/*/*/tpl/*.html'],
                tasks: ['htmlhint']
            },
            jasmine : {
                files: ['app/tests/jasmineSpec.js'],
                tasks: 'jasmine'
            },
            karma : {
                files: ['app/tests/testSpec.js'],
                tasks: 'karma'
            }
        }
    });

    // Npm tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-wiredep');

    //    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-htmlhint');


    //    // My tasks
    grunt.registerTask('default', ['jshint', 'htmlhint']);
    grunt.registerTask('less-css', ['less', 'cssmin']);

    grunt.registerTask('default', ['watch']);
};