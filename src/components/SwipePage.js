import * as React from 'react'
import { connect } from 'react-redux'
import { musicians }from '../lib/musicians'

class SwipePage extends React.PureComponent {
  render() {

  }
}

const mapStateToProps = (state) => {
musicians: state.musicians
}

export default connect(mapStateToProps)(SwipePage)