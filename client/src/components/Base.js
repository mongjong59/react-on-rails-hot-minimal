import React, { PropTypes } from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import { Route, Switch } from "react-router"
import { NavLink } from "react-router-dom"
import Home from "./Home"
import ReduxDemo from "./ReduxDemo"
import s from "./Base.css"

const Base = ({ store, history }) => (
  <Provider {...{ store }}>
    <ConnectedRouter history={history}>
      <div>
        <nav>
          <div className={s.item}>
            <NavLink to="/">Home</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/redux-demo">Redux Demo</NavLink>
          </div>
        </nav>
        <hr/>
        <div className={s.main}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/redux-demo" component={ReduxDemo} />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
)

export default Base
