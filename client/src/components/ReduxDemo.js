import React from "react"
import { connect } from "react-redux"
import { changeName } from "actions"

let ReduxDemo = ({ name, changeName }) => (
  <div>
    <h3>Hello{name && `, ${name}`}!</h3>
    <form >
      <label htmlFor="name">Say hello to:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => changeName(e.target.value)}
      />
    </form>
  </div>
)

const mapStateToProps = state => ({ name: state.name })

ReduxDemo = connect(mapStateToProps, { changeName })(ReduxDemo)

export default ReduxDemo
