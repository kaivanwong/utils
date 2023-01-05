import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default {
  input: './src/index.ts',
  external: ['axios'],
  output: [
    { format: 'es', file: 'dist/index.esm.js', sourcemap: true },
    { format: 'cjs', file: 'dist/index.cjs.js', sourcemap: true },
  ],
  plugins: [
    resolve(),
    commonjs(),
    terser(),
    typescript(),
    json(),
  ],
}
