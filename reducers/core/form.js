import * as FormTypes from 'Actions/core/form'
let assign = Object.assign

const initialState = {
    values : {}
}

const form = ( state = initialState, action ) => {

    switch ( action.type ) {

        case FormTypes.FORM_UPDATE_VALUE :
            return assign({}, state, {
                values : assign({}, state.values, {
                    [action.name]: action.value
                })
            });

        case FormTypes.FORM_RESET :
            return initialState

        default:
            return initialState
    }
}

export default form
