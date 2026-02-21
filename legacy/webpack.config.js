const webpack = require('webpack');
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolvePath = subPath => path.resolve(__dirname, subPath);

module.exports = (env) => {

  const { sourcemaps, extractText } = env;

  const NODE_ENV = process.env.NODE_ENV || 'development';

  /* eslint-disable */
  const __DEV__ = NODE_ENV === 'development';
  const __GHPAGES__ = NODE_ENV === 'gh-pages';
  const __PROD__ = NODE_ENV === 'production';
  /* eslint-enable */

  // Creating a `rules` array that will be passed into the final config.
  // This will allow us to programatically define things like minification
  // and sourcemaps for production and dev builds in a single file.

  const rules = [];

  const jsLoader = {
    test: /\.(js|jsx)$/,
    include: [resolvePath('src')],
    exclude: /node_modules/,
    use: 'babel-loader'
  };

  rules.push(jsLoader);


  // -------------------- //
  //  Global Style Rules  //
  // -------------------- //
  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: sourcemaps
    }
  };

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: sourcemaps,

    }
  };

  const resolveUrlLoader = {
    loader: 'resolve-url-loader',
    options: {
      sourceMap: sourcemaps
    }
  };

  // If a build needs a separate css file, setting
  // `env.extractText` will create a separte css file.

  if (extractText) {
    rules.push(
      {
        test: /(\.scss)$/,
        include: resolvePath('./src/scss'),
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            cssLoader,
            resolveUrlLoader,
            'postcss-loader',
            sassLoader
          ],
          publicPath: '/'
        })
      }
    );
  } else {
    rules.push(
      {
        test: /(\.scss)$/,
        include: resolvePath('src/scss'),
        use: [
          'style-loader',
          cssLoader,
          resolveUrlLoader,
          'postcss-loader',
          sassLoader]
      }
    );
  }

  rules.push(
    {
      test: /(\.css)$/,
      use: [
        'style-loader',
        cssLoader,
        resolveUrlLoader,
        'postcss-loader']
    }
  );

  // image loader

  let imageLoader;
  if (__PROD__) {
    imageLoader = {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            hash: 'sha512&digest=hex&name=[hash].[ext]'
          }
        },{
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            optipng: {
              optimizationLevel: 7,
            },
            gifsicle: {
              interlaced: true,
            },
          }
        }
      ]
    };
  } else {
    imageLoader = {
      test: /\.(jpg|png|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 25000,
      },
    };
  }
  rules.push(imageLoader);


  // --------- //
  //  Plugins  //
  // --------- //

  const plugins = [
    // Some loaders aren't setup for the loader.options syntax in Webpack 2,
    // webpack.LoaderOptionsPlugin() is the solution until they're updated.
    new webpack.LoaderOptionsPlugin({
      sourceMap: sourcemaps,
      options: [{
        context: resolvePath('/'),

        postcss: {
          autoprefixer: {
            add: true,
            remove: true,
            browsers: ['last 2 versions'],
          },
          discardComments: {
            removeAll: !sourcemaps, // removing comments breaks the inline source maps
          },
          discardUnused: true,
          mergeIdents: false,
          reduceIdents: false,
          safe: true,
          sourceMap: sourcemaps,
        }

      }]
    }),
    new HtmlWebpackPlugin({
     filename: 'index.html',
     inject: 'body',
     title: 'Dom Washburn :: Welcome!',
    //  favicon: `${paths.src}/images/favicon.ico`,
     template: './src/index.template.html',
     minify: {
       collapseWhitespace: true,
     }
   })
  ];

  // dev only plugins
  if (__DEV__) {
    plugins.push(
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    );
  }

  // plugins sepcifically for generating a separate css file
  if (extractText) {
    plugins.push(
      new extractTextPlugin({
        filename: "styles-[contenthash].css",
        disable: false,
        allChunks: true
      })
    );
  }


  // Return the final webpack config object created
  // after checking options for the build
  return {
    entry: !__PROD__
      ? {'bundle': ['react-hot-loader/patch', resolvePath('./src/index.hot.jsx')]}
      : {'bundle': resolvePath('./src/index.jsx')},
    output: {
      filename: !__PROD__
        ? '[name].js'
        : '[name]-[hash].js',
      publicPath: '/',
      path: __GHPAGES__
        ? resolvePath('gh-pages')
        : resolvePath('dist')
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    externals: !__PROD__
      ? []
      :[
        {
          'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
          }
        },
        {
          'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
          }
        }
      ],
    devtool: sourcemaps && !__PROD__
      ? 'inline-source-map'
      : 'source-map',
    devServer: !__PROD__
      ? {
          contentBase: resolvePath('dist'),
          compress: true,
          inline: true,
          historyApiFallback: true,
          hot: true,
          port: 3000,
          stats: 'errors-only',
          open: true
        }
      : {},
    module: { rules },
    plugins
  };
};
