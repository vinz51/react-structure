import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeStateless from 'Stateless/Home'

class Home extends Component {

    render() {

        return(
            <HomeStateless />
        )

    }

}

const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = (dispatch) => {
  return {  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
