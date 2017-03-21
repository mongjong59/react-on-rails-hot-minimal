import { combineReducers } from "redux"
import { routerReducer as router } from "react-router-redux"
import { CHANGE_NAME } from "actions"

const name = (state = "John Doe", action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  name,
  router
})

export default rootReducer
