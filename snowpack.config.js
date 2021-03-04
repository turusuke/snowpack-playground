/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    'src/js': { url: '/src/js' },
    'src/scss': { url: '/src/css' },
    'src/html/page': { url: '/' },
  },
  plugins: [
    [
      '@snowpack/plugin-babel',
      {
        input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
      },
    ],
    [
      '@snowpack/plugin-sass',
      {
        compilerOptions: {
          style: 'expanded',
        },
      },
    ],
    ['snowpack-plugin-posthtml'],
    ['@snowpack/plugin-run-script', {
      cmd: 'eslint src --ext .js,jsx,.ts,.tsx',
      // Optional: Use npm package "eslint-watch" to run on every file change
      watch: 'esw -w --clear src --ext .js,jsx,.ts,.tsx',
    }],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    target: 'es2020',
  },
  packageOptions: {
  },
  devOptions: {
  },
  buildOptions: {
    sourcemap: true,
  },
};
