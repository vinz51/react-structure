import validUrl from 'valid-url'
import emailValidator from 'email-validator'
import * as msg from './messages'

/**
 * @function required
 * @summary verify if the value exists
 * @param  {string} value
 * @return {array}
 */
export const required = (value) => {
    return !checkField(value) ? [msg.required] : []
}

/**
 * @function email
 * @summary verify if the field is a correct email
 * @param  {string} email
 * @return {array}
 */
export const email = (email) => {
    return !checkField(email) || !emailValidator.validate(email) ? [msg.email] : []
}

/**
 * @function url
 * @summary check if the value is a correct url
 * @param  {string} url
 * @return {boolean}
 */
export const url = (url) => {
    return !checkField(url) || !validUrl.isWebUri(url) ? [msg.url] : []
}

/**
 * @funtion checkField
 * @summary verify if the field is filled
 * @param  {string} value
 * @return {boolean}
 */
const checkField = (value) => {
    return !value || value === "" || value === "undefined" ? false : true
}
