import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {
  input: 'src/client/index.js',
  output: {
    name: 'next-auth-client',
    file: 'client.js',
    format: 'umd',
    globals: {
      'fetch': 'isomorphic-fetch'
    }
  },
  plugins: [
    json(),
    commonjs(),
    nodeResolve(),
    babel()
  ],
  
}