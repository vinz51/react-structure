import React, { Component } from 'react'

import Form from 'Containers/core/Form'
import Input from 'Containers/core/Input'
import Submit from 'Containers/core/Submit'

class App extends Component {

    sumitForm(data) {
        console.log('data => ', data);
    }

    render() {
        return(
            <h1>
                Hello world !
                <Form onSubmit={data => console.log(data)}>
                    <Input type="email" placeholder="Votre email" name="email" validate={['required','email']} />
                    <Input placeholder="Votre nom" name="lastname" validate={['required']} />
                    <Input placeholder="Votre prénom" name="firstname" validate={['required']} />
                    <Submit label="coucou"></Submit>
                </Form>
            </h1>
        )

    }

}

export default App
