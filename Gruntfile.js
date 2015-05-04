module.exports = function (grunt) {
	grunt.initConfig({
        "handlebars": {
            compile: {
                options: {
                    amd: true
                },
                src: ["views/handlebars/*.handlebars"],
                dest: "web/js/app/template/precompiled.handlebars.js"
            }
        },
        less: {
            development: {
                files: {
                    "web/css/app.css": "views/less/style.less"
                }
            }
        },
        watch: {
            less: {
                files: ["views/less/*.less"],
                tasks: ['less:development'],
                options: {
                    atBegin: true
                }
            },
            handlebars: {
                files: ["views/handlebars/*.handlebars"],
                tasks: ["handlebars:compile"],
                options: {
                    atBegin: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
};

