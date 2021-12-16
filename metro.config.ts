const { getDefaultConfig } = require('@expo/metro-config')

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig()
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer')
    },
    resolver: {
      assetExts: assetExts.filter((ext: any) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg']
    }
  }
})()
