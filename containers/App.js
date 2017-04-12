import React, { Component } from 'react'
import classes from 'Styles/class'
console.log('classes ', classes);
class App extends Component {

    render() {
        return(
            <h1 className={classes.title}>
                Hello world !
            </h1>
        )

    }

}

export default App
