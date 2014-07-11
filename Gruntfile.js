module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            //            unit: {
            //                configFile: 'karma.conf.js',
            //            },
            //continuous integration mode: run tests once in PhantomJS browser.
            continuous: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS'] //'Chrome', 'Firefox'
            }
        },
        wiredep: {
            target: {
                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
              'index.html'
              ],
                // Optional:
                // ---------
                cwd: '',
                dependencies: true,
                devDependencies: true,
                exclude: [],
                fileTypes: {},
                ignorePath: '',
                overrides: {}
            }
        }
    });

    // Npm tasks
    //    grunt.loadNpmTasks('grunt-contrib-jshint');
    //    grunt.loadNpmTasks('grunt-contrib-uglify');
    //    grunt.loadNpmTasks('grunt-contrib-less');
    //    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //    grunt.loadNpmTasks('grunt-ngmin');
    //
    //    grunt.loadNpmTasks('grunt-contrib-jasmine');
    //    grunt.loadNpmTasks('grunt-contrib-qunit');
    //
    //
    //    grunt.loadNpmTasks('grunt-contrib-concat');
    //    grunt.loadNpmTasks('grunt-contrib-watch');
    //    grunt.loadNpmTasks('grunt-htmlhint');
    //
    //    // My tasks
    //    grunt.registerTask('default', ['jshint', 'less', 'cssmin', 'jasmine']);
    //    grunt.registerTask('less-css', ['less', 'cssmin']);
    //    grunt.registerTask('test', ['qunit', 'jasmine']);
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-wiredep');
    
    grunt.registerTask('default', ['grunt-wiredep']);
};