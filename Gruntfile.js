'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
  port: LIVERELOAD_PORT
});
var mountFolder = function(connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
 
  
  grunt.initConfig({
  
    watch: {
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
         
          './{,*/,*/*/}*.html',
          
          '{.tmp,.}/styles/css/{,*/}*.css',
          '{.tmp,.}/{,*/}*.js',
          './images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.'),
              
            ];
          }
        }
      }
    }
    
  });
  
 
  
  grunt.registerTask('server', function(target) {

    grunt.task.run([
      
      'connect:livereload',
      
      'watch'
    ]);
  });
  
  
};