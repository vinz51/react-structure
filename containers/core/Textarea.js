import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as validators from 'Validators'

class Textarea extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value   : '',
            errors  : [],
            validate: []
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

        return(
            <div>
                <textarea
                    name={ this.props.name }
                    value={ this.context.values[this.props.name] }
                    placeholder={ this.props.placeholder }
                    onChange={ this.onChange }
                    onBlur={ this.onBlur }
                    autoFocus={ this.props.autofocus }
                    wrap={ this.props.wrap }
                    maxLength={ this.props.maxlength }
                >
                </textarea>
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

Textarea.propTypes = {
    name        : PropTypes.string.isRequired,
    value       : PropTypes.string,
    placeholder : PropTypes.string,
    wrap        : PropTypes.string,
    validate    : PropTypes.arrayOf(PropTypes.string),
    maxlength   : PropTypes.number,
}

Textarea.defaultProps = {
    value       : '',
    autofocus   : false,
    wrap        : 'soft',
}

Textarea.contextTypes = {
    update              : PropTypes.func.isRequired,
    values              : PropTypes.object.isRequired,
    registerValidation  : PropTypes.func.isRequired,
}

export default Textarea
