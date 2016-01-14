//npm install grunt-contrib-uglify --save-dev

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    // uglify
    uglify: {
      options: {
        mangle: false,
        compress: {
          drop_console: true
        }
      },
      js: {
        files: [{
          cwd: 'webapp/',  // ruta de nuestro javascript fuente
          expand: true,    // ingresar a las subcarpetas
          src: '**/*.js',     // patrón relativo a cwd
          dest: 'webapp_min/'  // destino de los archivos compresos
        }]
      }
    }
 });
  
  //loadNpmTasks
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Run Default task(s).
  grunt.registerTask('default', ['uglify']);
  
};