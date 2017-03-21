import React, { PropTypes } from "react"
import { Route, Switch, withRouter } from "react-router"
import { NavLink } from "react-router-dom"
import Home from "./Home"
import ReduxDemoContainer from "containers/ReduxDemoContainer"
import s from "./Base.css"

const Base = ({ railsContext, location, match }) => {
  return (
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
          <Route path="/redux-demo" component={ReduxDemoContainer} />
        </Switch>
      </div>
    </div>
  )
}

Base.propTypes = {
  railsContext: PropTypes.shape({ userAgent: PropTypes.string }),
  match: PropTypes.shape({ url: PropTypes.string }),
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
    key: PropTypes.string,
    search: PropTypes.string
  })
}

export default withRouter(Base)
