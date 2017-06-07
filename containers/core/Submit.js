import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Submit extends Component {

    render() {

        return(
            <button type="submit">
                { this.props.label }
            </button>
        )

    }
}

Submit.propTypes = {
    label : PropTypes.string,
}

Submit.contextTypes = {
    isFormValid : PropTypes.func.isRequired,
    submit      : PropTypes.func.isRequired,
}

Submit.defaultProps = {
    label : 'Send'
}

export default Submit
