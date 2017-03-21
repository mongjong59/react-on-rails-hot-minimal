import { connect } from "react-redux"
import { changeName } from "actions"
import ReduxDemo from "components/ReduxDemo"

const mapStateToProps = state => ({ name: state.name })

export default connect(mapStateToProps, { changeName })(ReduxDemo)
