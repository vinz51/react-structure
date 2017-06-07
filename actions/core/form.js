
export const FORM_UPDATE_VALUE = 'FORM_UPDATE_VALUE';

/**
 * @function update
 * @summary Update one value of the form
 * @param  {string} name
 * @param  {string} value
 * @return {object}
 */
export const update = (name, value) => {
    return {
        type: FORM_UPDATE_VALUE,
        name, value
    };
}

export const FORM_RESET = 'FORM_RESET';

/**
 * @function reset
 * @summary Reset the form
 * @return {object}
 */
export const reset = () => {
    return {
        type: FORM_RESET
    };
}
