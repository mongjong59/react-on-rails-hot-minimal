/* global document */

import React from "react"
import PropTypes from "prop-types"
import { applyMiddleware, createStore } from "redux"
import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import createBrowserHistory from "history/createBrowserHistory"
import { routerMiddleware } from "react-router-redux"
import { Route } from "react-router"
import reducer from "reducer"
import { render } from "react-dom"
import ReactOnRails from "react-on-rails"
import Base from "components/Base"

const history = createBrowserHistory()

const configureStore = (props) => {
  const enhancers = applyMiddleware(routerMiddleware(history))
  return createStore(reducer, props, enhancers)
}

const consoleErrorReporter = ({ error }) => {
  console.error(error) // eslint-disable-line
  return null
}
consoleErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
}

const App = (props, railsContext, domNodeId) => {
  const store = ReactOnRails.getStore("store")
  const renderApp = (Component) => {
    const element = (
      <AppContainer errorReporter={consoleErrorReporter}>
        <Component {...{ store, history }} />
      </AppContainer>
    )
    render(element, document.getElementById(domNodeId))
  }
  renderApp(Base)
  if (module.hot) {
    module.hot.accept(["reducer", "components/Base"], () => {
      store.replaceReducer(reducer)
      renderApp(Base)
    })
  }
}

ReactOnRails.registerStore({ store: configureStore })
ReactOnRails.register({ App })
