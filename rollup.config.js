import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import notify from 'rollup-plugin-notify';

export default {
  input: 'app/scripts/main.js',
  output: {
    file: 'build/assets/bundle.js',
    format: 'iife',
    name: 'bundle',
    sourcemap: true,
  },
  plugins: [
    notify(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    uglify(),
  ],
};
