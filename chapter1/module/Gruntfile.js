module.exports = function (grunt) {
  //自定义任务配置
  grunt.initConfig({
    jshint: {
      src: 'hello.js',
      options: {
        jshintrc: true, // 使用.jshintrc文件  
        esversion: 6
      }
    },
    uglify: {
      build: {
        src: 'compiledes6.js',
        dest: 'build/compiledes6.min.js'
      }
    }
  });

  //将两个任务插件导入
  grunt.loadNpmTasks('grunt-contrib-uglify');  // uglify
  grunt.loadNpmTasks('grunt-contrib-jshint');  // jshint

  //注册自定义任务, 这个任务是jshint和uglify两个任务的组合
  grunt.registerTask('default', ['jshint', 'uglify']);
  // 可以跑grunt 或者 grunt uglify 或者 grunt jshint 来执行任务
}