module.exports = function (api) {
  api.cache(true)

  // preset
  const presets = [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "targets": {
          "ie": "11",
        },
        "corejs": 3
      }
    ]
  ]

  // plugins
  const plugins = []

  return {
    presets,
    plugins
  }
}
