const workletsPluginOptions = {
  // Your custom options.
}

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    // [
    //   'react-native-reanimated/plugin',
    //   {
    //     processNestedWorklets: true,
    //   },
    // ],
    'import-glob-meta',
    // "@jteppinette/babel-plugin-import-glob",
    ['react-native-worklets/plugin', workletsPluginOptions],
  ],
};
