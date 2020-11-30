import HtmlWebPackPlugin from 'html-webpack-plugin';
import * as path from 'path';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  devServer: {
    hot: false,
    historyApiFallback: true,
  },
  entry: './src/index.ts',
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ],
  },
  output: {
    path: path.resolve('build/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      // Typescript Loader
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname + '/src/tsconfig.react.json'),
        },
      },
      // JS Loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ '@babel/react' ],
            },
          },
        ],
      },
      // SCSS Loading
      // https://github.com/webpack-contrib/sass-loader
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              import: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: path.resolve(__dirname, 'node_modules/webpack-dev-server/client'),
        loader: 'null-loader',
      },
    ]
  },
  plugins: [
    htmlPlugin,
  ],
};
