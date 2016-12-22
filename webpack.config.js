var config = {
   entry: './main.js',

   output: {
      path: './',
      filename: 'bundle.js',
      publicPath:'http://localhost:8080/'
   },

   devServer: {
      contentBase:'./',
      publicPath: 'http://localhost:8080/'
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['react', 'es2015']
            }
         }
      ]
   }
}

module.exports = config;
