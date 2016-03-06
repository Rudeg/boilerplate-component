const gulp = require('gulp')
const rollup = require('rollup').rollup
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const nodeResolve = require('rollup-plugin-node-resolve')
const stylus = require('gulp-stylus')
const connect = require('gulp-connect')


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

const rollupReactConf = {
  entry: 'src/index.js',
  external: ['react'],
  plugins: [
    //nodeResolve({ jsnext: true }),
    babel(),
    commonjs()
  ]
}

const iifeBundleConf = {
  format: 'iife',
  moduleName: 'component',
  dest: 'dist/index.iife.js'
}

const cjsBundleConf = {
  format: 'cjs',
  dest: 'dist/index.js'
}

const exampleServConf = {
  root: ['example'],
  port: 8080,
  livereload: true
}

gulp.task('build:iife', () => rollup(rollupConf).then((bundle) => bundle.write(iifeBundleConf)))
gulp.task('build:cjs', () => rollup(rollupConf).then((bundle) => bundle.write(cjsBundleConf)))
gulp.task('style', () => gulp.src('style/*.styl').pipe(stylus()).pipe(gulp.dest('dist')))
gulp.task('style:min', () => gulp.src('style/*.styl').pipe(stylus({ compress: true })).pipe(gulp.dest('dist')))
gulp.task('server:example', () => connect.server(devServConf))
gulp.task('build', ['build:cjs', 'build:iife'])

gulp.task('default', ['build', 'style:min'])
