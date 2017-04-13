import React from 'react'
import App from 'Containers/App'

import {
    renderIntoDocument, // Render a react element with the DOM
    isCompositeComponent, // A react element like class or function
    findRenderedDOMComponentWithTag // Find one DOM element
} from 'react-dom/test-utils'

describe('Test of the app container ', () => {
    const TestContainer = renderIntoDocument(
        <App />
    )

    it( 'Loading the app container ', () => {
        expect( isCompositeComponent(TestContainer) ).toBeTruthy()
        expect( isCompositeComponent(TestContainer) ).toBeDefined()
    })

    it( 'Result of the app', () => {
        expect( findRenderedDOMComponentWithTag(TestContainer, 'h1') ).toBeTruthy()
    })

})
