# react-on-rails-hot-minimal

A minimal React on Rails implementation of HMR with React Hot Loader 3, Redux, React Router 4, CSS modules and Webpack 2

## Check out the demo

- `bundle install`
- `cd client && yarn`
- `foreman start`
- visit **localhost:3000** and change source code to check out HMR

## Essentials for Hot Module Replacement

- add `"react-hot-loader"` to `package.json`
- disable `modules` and add `plugin` in `.babelrc`
- add `"react-hot-loader/patch"`, `"webpack-dev-server/client?http://localhost:3500"` to webpack `entry` before your source file (in the same chunk that contains your source file if you have multiple chunks)
- add `new webpack.HotModuleReplacementPlugin()` to webpack `plugins`
- set up dev server with `hot: true` or `hotOnly: true`
- wrap elements in `AppContainer` from `react-hot-loader`
- create a render function with `reactDOM` and use it for initial rendering and in `module.hot.accept`
