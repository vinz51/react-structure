import React, { Component } from 'react'

import Form from 'Containers/core/Form'
import Input from 'Containers/core/Input'

class App extends Component {

    render() {
        return(
            <h1>
                Hello world !
                <Form>
                    <Input />
                </Form>
            </h1>
        )

    }

}

export default App
