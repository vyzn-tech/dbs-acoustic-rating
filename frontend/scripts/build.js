const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const { ModuleFederationPlugin } = require('webpack').container;

//In order to override the webpack configuration without ejecting the create-react-app
const config = defaults.__get__('config');

config.optimization.splitChunks = false;
config.output.path = 'auto'

//Customize the webpack configuration here.
// config.resolve.fallback = {
//   ...config.resolve.fallback,
// };

config.plugins = [
  ...config.plugins,
  new ModuleFederationPlugin({
    name: 'app1',
    filename: 'remoteEntry.js',
    library: {type: 'var', name: 'app1'},
    exposes: {
      './web-components': './src/app.js',
      './remoteApp': './src/remoteApp',
    },
    shared: {},
  }),
];
