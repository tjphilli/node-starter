'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    // app: require('./bower.json').appPath || 'app',
    app: 'public',
    dist: '__rendered/public'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    globalConfig: appConfig,
    s3: {
      options: {
        accessKeyId: "",
        secretAccessKey: "",
        bucket: "",
        overwrite: true
      },
      move: {
        options: {
          headers: {
           CacheControl: 'max-age=604800'
          }
        },
        cwd: "__rendered/public/",
        src: "**",
        dest: ""
      }
    },
    sass: {
      options: {
        // sourceMap: true
      },
      dist: {
        options: {
          outputStyle: 'extended'
        },
        files: {
          '<%= globalConfig.dist %>/css/app.css': '<%= globalConfig.app %>/scss/app.scss'
        }
      },
      dev: {
        options: {
          outputStyle: 'extended'
        },
        files: {
          '<%= globalConfig.app %>/css/app.css': '<%= globalConfig.app %>/scss/app.scss'
        }
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= globalConfig.app %>/js/{,*/}*.js'],
        // tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      views: {
        files: ['views/{,*/}*.jade'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      sass: {
        files: '<%= globalConfig.app %>/scss/**/*.scss',
        tasks: ['sass:dev', 'newer:copy:styles', 'autoprefixer:dev']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= globalConfig.app %>/{,*/}*.html',
        '<%= globalConfig.app %>/{,*/}*.css',
          '.tmp/css/{,*/}*.css',
          '<%= globalConfig.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= globalConfig.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    // jshint: {
    //   options: {
    //     jshintrc: '.jshintrc',
    //     reporter: require('jshint-stylish')
    //   },
    //   all: {
    //     src: [
    //       'Gruntfile.js',
    //       '<%= globalConfig.app %>/js/{,*/}*.js'
    //     ]
    //   }
    // },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= globalConfig.dist %>/{,*/}*',
            '!<%= globalConfig.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= globalConfig.dist %>/css/',
          src: '{,*/}*.css',
          dest: '<%= globalConfig.dist %>/css/'
        }]
      },
      dev: {
        files: [{
          expand: true,
          cwd: '<%= globalConfig.app %>/css/',
          src: '{,*/}*.css',
          dest: '<%= globalConfig.app %>/css/'
        }]
      }
    },
    filerev: {
      dist: {
        src: [
          '<%= globalConfig.dist %>/js/{,*/}*.js',
          '<%= globalConfig.dist %>/css/{,*/}*.css',
          // '<%= globalConfig.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= globalConfig.dist %>/css/fonts/*'
        ]
      }
    },
    useminPrepare: {
      html: '__rendered/views/{,*/}*.jade',
      options: {
        dest: '__rendered/public',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['__rendered/views/*.jade'],
      css: ['<%= globalConfig.dist %>/css/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= globalConfig.dist %>','<%= globalConfig.dist %>/images'],
        // blockReplacements: {
        //   js: function(block) {
        //       return 'script(src="' + block.dest + '")';
        //   },
        //   css: function(block) {
        //       return 'link(rel="stylesheet" href="' + block.dest + '")';
        //   }
        // }
      }
    },

    // imagemin: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: '<%= globalConfig.app %>/images',
    //       src: '{,*/}*.{png,jpg,jpeg,gif}',
    //       dest: '<%= globalConfig.dist %>/images'
    //     }]
    //   }
    // },
    
    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= globalConfig.app %>',
          dest: '<%= globalConfig.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= globalConfig.dist %>/images',
          src: ['generated/*']
        }]
      },
      pre_dist: {
        files: [
        {
          expand: true,
          cwd: 'views/',
          src: '**',
          dest: '__rendered/views/'
        }, 
        {
          expand: true,
          cwd: 'public/images/',
          src: '**',
          dest: '__rendered/public/images/'
        },
        {
          expand: true,
          cwd: 'public/downloads/',
          src: '**',
          dest: '__rendered/public/downloads/'
        },
        {
          expand: true,
          src: ['public/bower_components/**'],
          dest: '__rendered'
        },
        {
          expand: true,
          cwd: 'public/js',
          src: '**',
          dest: '.tmp/js/'
        },
        {
          expand: true,
          cwd: 'public/css/fonts',
          src: '**',
          dest: '__rendered/public/fonts'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= globalConfig.app %>/css',
        dest: '.tmp/css/',
        src: '{,*/}*.css'
      }
    },
    'string-replace': {
      dist: {
        files: [{
          expand: true,
          cwd: '__rendered/views/',
          src: '_layout.jade',
          dest: '__rendered/views/'
        }],
        options: {
          replacements: [
            {
              pattern: 'script(src="http://localhost:35729/livereload.js")',
              replacement: ''
            },
            {
              pattern: 'rel="stylesheet" href="',
              replacement: 'rel="stylesheet" href="http://d1697b2w85msn7.cloudfront.net'
            },
            {
              pattern: /<script src="/g,
              replacement: '<script src="http://d1697b2w85msn7.cloudfront.net'
            }
          ]
        }
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        // 'imagemin'
      ]
    }
  });


  grunt.loadNpmTasks('grunt-autoprefixer');


  grunt.registerTask('default', ['sass']);
  
  //grunt.registerTask('default', ['sass', 'bower-install', 'connect:app', 'watch']);
  // grunt.registerTask('validate-js', ['jshint']);
  // grunt.registerTask('server-dist', ['connect:dist']);
  
  // grunt.registerTask('publish', ['compile-jade', 'compile-sass', 'clean:dist', 'validate-js', 'useminPrepare', 'copy:dist', 'newer:imagemin', 'concat', 'cssmin', 'uglify', 'usemin']);


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });


  grunt.registerTask('build', [
    'sass',
    'autoprefixer',
    'clean:dist',
    'copy:pre_dist',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'copy:dist',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'string-replace',
    // 's3'
  ]);

  grunt.registerTask('default', [
    // 'newer:jshint',
    'sass',
    'autoprefixer',
    'build'
  ]);
};
