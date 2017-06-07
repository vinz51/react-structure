/**
 * @documentation https://x-team.com/blog/tutorial-forms-in-react-and-redux/
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { without } from 'lodash'

import { update, reset } from 'Actions/core/form'

class Form extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            validations : []
        }
        this.registerValidation = this.registerValidation.bind(this)
        this.removeValidation   = this.removeValidation.bind(this)
        this.isFormValid        = this.isFormValid.bind(this)
        this.onSubmit           = this.onSubmit.bind(this)
    }

    /**
     * @function registerValidation
     * @description registerValidation adds a reference of the validating function to the array (used when field component is mounted) and returns another function removing the same reference from the register
     * @param  {Boolean} isValidFunc
     * @return {Boolean}
     */
    registerValidation(isValidFunc) {
        this.state.validations = [...this.state.validations, isValidFunc];
        return this.removeValidation.bind(null, isValidFunc);
    }

    /**
     * @function removeValidation
     * @summary Remove the validation from the
     * @param  {[type]} ref [description]
     * @return {[type]}     [description]
     */
    removeValidation(ref) {
        this.state.validations = without(this.state.validations, ref);
    }

    /**
     * @function isFormValid
     * @description checks registered validation functions and returns true or false. This method is also injected into the context, so all nested components can check if the form is valid or not.
     * @param  {[type]}  showErrors
     * @return {Boolean}
     */
    isFormValid(showErrors) {
        return this.state.validations.reduce((memo, isValidFunc) => isValidFunc(showErrors) && memo, true);
    }

    /**
     * @function submit
     * @description checks if the form is valid, sends copy of the model to the callback function and resets the model to the initial state
     * @return {[type]} [description]
     */
    submit() {

        if ( this.isFormValid(true) && this.props.hasOwnProperty("onSubmit") )
        {
            this.props.onSubmit(Object.assign({}, this.props.values))
        }

    }

    /**
     * @function getChildContext
     * @return {object}
     */
    getChildContext() {

        return {
            submit              : this.submit,
            update              : this.props.update,
            reset               : this.props.reset,
            values              : this.props.values,
            registerValidation  : this.registerValidation,
            isFormValid         : this.isFormValid
        }

    }

    /**
     * @function onSubmit
     * @summary Stop the event to avoid to be redirect by the action
     * @param  {object} event
     */
    onSubmit(event) {
        event.preventDefault()
        this.submit()
    }

    render() {

        return (
            <form onSubmit={e => this.onSubmit(e)}>
                { this.props.children }
            </form>
        )

    }
}

Form.propTypes = {
    children    : PropTypes.node,
    onSubmit    : PropTypes.func,
    update      : PropTypes.func,
    reset       : PropTypes.func,
    values      : PropTypes.object,
}

Form.childContextTypes = {
    submit              : PropTypes.func,
    update              : PropTypes.func,
    reset               : PropTypes.func,
    values              : PropTypes.object,
    registerValidation  : PropTypes.func,
    isFormValid         : PropTypes.func,
}

const mapStateToProps = (state, ownProps) => {
    return {
        values : state.form.values
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        update: (name, value) => {
            dispatch(update(name, value))
        },
        reset: () => {
            dispatch(reset())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)
