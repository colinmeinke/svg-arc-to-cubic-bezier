import babel from 'rollup-plugin-babel'
import commonJs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

const config = {
  input: 'src/index.js',
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    commonJs()
  ],
  output: {
    name: 'SVGArcToCubicBezier',
    sourcemap: false,
    format: 'umd'
  }
}

if (process.env.NODE_ENV === 'production') {
  config.output.file = 'dist/svg-points-to-cubic-bezier.min.js'
  config.plugins.push(uglify())
} else {
  config.output.file = 'dist/svg-points-to-cubic-bezier.js'
}

export default config
