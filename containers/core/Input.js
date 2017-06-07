import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as validators from 'Validators'

class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
            type        : 'text',
            value       : '',
            errors      : [],
            validate    : []
        }
        this.update     = this.update.bind(this)
        this.onChange   = this.onChange.bind(this)
        this.onBlur     = this.onBlur.bind(this)
        this.isValid    = this.isValid.bind(this)
    }

    componentWillMount() {
        this.removeValidationFromContext = this.context.registerValidation(show =>
        this.isValid(show));
    }

    componentWillUnmount() {
        this.removeValidationFromContext();
    }

    update(value) {
        this.context.update( this.props.name, value )

        if ( this.state.errors.length )
        {
            setTimeout( () => this.isValid(true), 0)
        }
    }

    onChange(event) {
        this.update( event.target.value )
        setTimeout( () => this.isValid(true), 0)
    }

    isValid(showErrors) {

        if ( this.props.hasOwnProperty('validate') )
        {
            const errors = this.props.validate.reduce((memo, currentName) =>
                memo.concat(validators[currentName](
                    this.context.values[this.props.name]
                )), []);

            if (showErrors)
            {
                this.setState({
                    errors
                });
            }
            return !errors.length;
        }

        return true

    }

    onBlur() {
        this.isValid(true);
    }

    render() {
        return (
            <div>
                <input
                    name={ this.props.name }
                    type={ this.props.type || this.state.type }
                    value={ this.context.values[this.props.name] || this.state.value }
                    placeholder={ this.props.placeholder }
                    pattern={ this.props.pattern }
                    min={ this.props.min }
                    max={ this.props.max }
                    onChange={ this.onChange }
                    onBlur={ this.onBlur }
                    autoFocus={ this.props.autofocus }
                />
                {
                    this.state.errors.length ?
                        (<div>
                            {this.state.errors.map((error, i) => <div key={i}>{error}</div>)}
                        </div>)
                    :
                        ''
                }
            </div>
        )
    }
}

Input.propTypes = {
    name        : PropTypes.string.isRequired,
    type        : PropTypes.string,
    value       : PropTypes.string,
    placeholder : PropTypes.string,
    pattern     : PropTypes.string,
    min         : PropTypes.number,
    max         : PropTypes.number,
    autofocus   : PropTypes.bool,
    validate    : PropTypes.arrayOf(PropTypes.string),
}

Input.defaultProps = {
    autofocus : false
}

Input.contextTypes = {
    update              : PropTypes.func.isRequired,
    values              : PropTypes.object.isRequired,
    registerValidation  : PropTypes.func.isRequired,
}

export default Input
