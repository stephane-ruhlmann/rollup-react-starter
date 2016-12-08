import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
const env = process.env.NODE_ENV || 'dev'

export default {
  entry : 'index.js',
  plugins : [
    replace({
      'process.env.NODE_ENV': `'${env}'`
    }),
    resolve({jsnext : true, main : true, browser : true}),
    commonjs(),
    babel({
      exclude : 'node_modules/**'
    })
  ],
  format : 'iife',
  dest : 'dist/app.js'
}
