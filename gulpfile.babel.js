const gulp = require('gulp')
const rollup = require('rollup').rollup
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const nodeResolve = require('rollup-plugin-node-resolve')
const stylus = require('gulp-stylus')
const connect = require('gulp-connect')

// Configs for all tasks
// Comments are just examples how to add posible configurations to the tasks

const rollupConf = {
  entry: 'src/index.js',
  plugins: [
    //nodeResolve({ jsnext: true }),
    babel(),
    commonjs({
      //include: 'node_modules/**'
    })
   ]
}

//A self-executing function, suitable for inclusion as a <script> tag format
const iifeBundleConf = {
  format: 'iife',
  moduleName: 'component',
  dest: 'dist/index.iife.js'
}

//CommonJS, suitable for Node and Browserify/Webpack format
const cjsBundleConf = {
  format: 'cjs',
  dest: 'dist/index.js'
}

//example server confin
const exampleServConf = {
  root: ['example'],
  port: 8080,
  livereload: true
}
gulp.task('server:example', () => connect.server(devServConf))

gulp.task('build:iife', () => rollup(rollupConf).then((bundle) => bundle.write(iifeBundleConf)))
gulp.task('build:cjs', () => rollup(rollupConf).then((bundle) => bundle.write(cjsBundleConf)))
gulp.task('style', () => gulp.src('style/*.styl').pipe(stylus()).pipe(gulp.dest('dist')))
gulp.task('style:min', () => gulp.src('style/*.styl').pipe(stylus({ compress: true })).pipe(gulp.dest('dist')))
gulp.task('build', ['build:cjs', 'build:iife', 'style:min'])

gulp.task('watch', () => {
  gulp.watch('src/*.js', ['build:iife', 'build:cjs'])
  gulp.watch('style/*.styl', ['style'])
})


gulp.task('default', ['watch'])
