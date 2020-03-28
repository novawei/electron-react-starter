const path = require('path')
const { spawn } = require('child_process')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin')

const config = {
  entry: {
    app: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    publicPath: './',
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/i,
        include: /src/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]'
              },
              sourceMap: true,
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]'
              },
              sourceMap: true,
              importLoaders: 1
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|webp)$/i,
        use: 'url-loader'
      },
      {
        test: /\.(htm|html)$/i,
        use: 'html-withimg-loader'
      },
      {
        test: /\.(eot|ttf|woff|svg)$/i,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      hash: true
    }),
    new TypedCssModulesPlugin({
      globPattern: 'src/**/*.{css,less}'
    }),
  ]
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.output.publicPath = '/'
    config.devServer = {
      port: process.env.PORT,
      open: false,
      compress: true,
      // noInfo: true,
      // stats: 'errors-only',
      inline: true,
      lazy: false,
      hot: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      contentBase: path.join(__dirname, 'dist'),
      watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/,
        poll: 100
      },
      historyApiFallback: {
        verbose: true,
        disableDotRule: false
      },
      before() {
        spawn('yarn', ['start'], {
          shell: true,
          env: process.env,
          stdio: 'inherit',
        })
          .on('close', code => process.exit(code))
          .on('error', spawnError => console.error(spawnError));
      }
    }
  }
  return config
}
