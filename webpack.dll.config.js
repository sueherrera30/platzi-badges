const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      'react-router-dom',    
    ]
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    //cada que impote un archivo le pondre un hash para poder diferenciar
    // si archivo a cambiado me quede un nuevo hash 
    filename: 'js/[name].[hash].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    })
  ],
}
