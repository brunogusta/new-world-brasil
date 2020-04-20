const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: (config) => {
    config.resolve = {
      alias: {'~': path.resolve(__dirname, '..', 'src')}
    }
    return config;
  }
};
