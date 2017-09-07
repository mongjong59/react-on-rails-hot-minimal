# react-on-rails-hot-minimal

A minimal React on Rails implementation of HMR with React Hot Loader 3, Redux, React Router 4, CSS modules and Webpack 2

## Check out the demo

- `bundle install`
- `cd client && yarn`
- `foreman start`
- visit **localhost:3000** and change source code to check out HMR

## Essentials for Hot Module Replacement

- in `package.json`
  - add `"react-hot-loader"`
- in `.babelrc`
  - use `es2015` preset, disable `modules` and add `"react-hot-loader/babel"` plugin
- in `webpack.config.js`
  - add `"react-hot-loader/patch"` right before your root source file (e.g. `client/entry` in this rep) in to "entry" config
  - add `new webpack.HotModuleReplacementPlugin()` to  `plugins` config
  - add `hot: true` (or `hotOnly: true)`, and `headers: { "Access-Control-Allow-Origin": "http://yourRailsHost" }` (or just `headers: { "Access-Control-Allow-Origin": "*" }`) to `devServer` config
- in your root source file (e.g. `client/entry.js` in this rep)
  - wrap your elements in `AppContainer` from `react-hot-loader` package
  - use `module.hot.accept` and specify modules and how they are going to be replaced

Check out the source code for more details.
