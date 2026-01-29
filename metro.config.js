/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// const config = {};
 

// const { getDefaultConfig } = require("metro-config")
const path = require("path")

const extraNodeModules = {
  "@components": path.resolve(__dirname, "components"),
  "@screens": path.resolve(__dirname, "screens"),
  "@store": path.resolve(__dirname, "store"),
}

const watchFolders = [
  path.resolve(__dirname, "components"),
  path.resolve(__dirname, "screens"), 
  path.resolve(__dirname, "store"),
]

const {
  resolver: { sourceExts, assetExts },
} = getDefaultConfig(__dirname);

const config = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== "svg"),
    sourceExts: [...sourceExts, "svg", "js", "jsx", "ts", "tsx", "json"],
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        //redirects dependencies referenced from extraNodeModules to local node_modules
        name in target
          ? target[name]
          : path.join(process.cwd(), "node_modules", name)
    })
  },
  watchFolders,
  resetCache: true
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config);