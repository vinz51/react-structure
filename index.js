import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { logger } from 'redux-logger'

import allClasses from 'Styles/core.css'

import App from 'Containers/App'

import { NoMatch } from 'Errors/errors'

import reducersApp from 'Reducers/index.js'

let store = createStore(
    reducersApp,
    applyMiddleware(logger)
)

render(
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)
