import React from 'react'
import { combineReducers } from 'redux'

import testStore from './testStore'

import form from './core/form'

const reducersApp = combineReducers({
    testStore,
    form
})

export default reducersApp
