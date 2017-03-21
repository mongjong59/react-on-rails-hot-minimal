/* global window document */

import React from "react"
import { applyMiddleware, createStore } from "redux"
import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import createBrowserHistory from "history/createBrowserHistory"
import { routerMiddleware, ConnectedRouter } from "react-router-redux"
import { Route } from "react-router"
import reducer from "reducer"
import { render } from "react-dom"
import ReactOnRails from "react-on-rails"
import Base from "components/Base"

const history = createBrowserHistory()

const store = (props) => {
  const enhancers = applyMiddleware(routerMiddleware(history))
  return createStore(reducer, props, enhancers)
}

const consoleErrorReporter = ({ error }) => {
  console.error(error) // eslint-disable-line
  return null
}
consoleErrorReporter.propTypes = {
  error: React.PropTypes.instanceOf(Error).isRequired
}

const App = (props, railsContext, domNodeId) => {
  const appStore = ReactOnRails.getStore("store")
  const renderApp = (Component) => {
    const element = (
      <AppContainer errorReporter={consoleErrorReporter}>
        <Provider store={appStore}>
          <ConnectedRouter history={history}>
            <Component {...props} {...{ railsContext }} />
          </ConnectedRouter>
        </Provider>
      </AppContainer>
    )
    render(element, document.getElementById(domNodeId))
  }
  renderApp(Base)
  if (module.hot) {
    module.hot.accept("components/Base", () => { renderApp(Base) })
    module.hot.accept("reducer", () => {
      appStore.replaceReducer(reducer)
    })
  }
}

ReactOnRails.registerStore({ store })
ReactOnRails.register({ App })
