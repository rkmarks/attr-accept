module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'reactAccept',
    sourceMap: 'inline',
    exports: 'named'
  },
  plugins: []
}
