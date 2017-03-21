import React from "react"

const ReduxDemo = ({ name, changeName }) => (
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

export default ReduxDemo
