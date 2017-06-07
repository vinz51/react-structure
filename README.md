# Structure
I created this boilerplate to optimize our time when we create a new project. I use it for my personnals projects and if you have any questions ask them to me inside the contact on my website : www.vincentbenoit.com.

## The list of the links packages

### Express
http://expressjs.com/

### Webpack 2
https://webpack.js.org/configuration/

### React router dom
https://reacttraining.com/react-router/web/guides/quick-start

### React redux
http://redux.js.org/

### Redux Logger
https://github.com/evgenyrodionov/redux-logger

### Sass
https://github.com/webpack-contrib/sass-loader

### Assets
https://github.com/webpack-contrib/file-loader
https://github.com/webpack-contrib/extract-text-webpack-plugin

### Testing
If you would like to know how works Jest please try this great tutorial : https://www.sitepoint.com/test-react-components-jest/
Jest's documentation : https://facebook.github.io/jest/docs/api.html#writing-assertions-with-expect
React utils : https://facebook.github.io/react/docs/test-utils.html

## Usage
Start the server : npm start
If you would like to run the jest's watch use the command line : npm test -- --watch

## Create a form
If you wanna use the form component you should use it like below.

### 1) Import the components

  import Form from 'FormCore/Form'
  import Input from 'FormCore/Input'
  import Submit from 'FormCore/Submit'

### 2) Use them

  // ...

  render() {
    return(
      <div>
        <Form>
          <Input name="nameOfTheInput" />
          <Submit />
        </Form>
      </div>
    )
  }

  // ...

### 3) Props
  A) For the Form
    You can add a function inside the onSubmit to retrieve the data inside the component. Otherwise, nothing happened.
      <Form onSubmit={ data => this.myArrowFunction(data) }>
        ...
      </Form>

  B) For the input
    Availables props :
    - name {string} (required)
      - type {string} (text by default)
      - value {string}
      - placeholder {string}
      - pattern {string}
      - min {number}
      - max {number}
      - autofocus {boolean}
      - validate {array of string} (required and email are availables)

    <Input
      name="myName"
      type="text"
      value={this.state.value}
      placeholder="say my name"
      validate={['required']}
    />

  C) For the textarea
    Availables props :
      - name {string} (required)
      - value {string}
      - placeholder {string} (none by default)
      - autofocus {boolean} (false by default)
      - validate {array of string} (required and email are availables)
      - maxlength {number} (none by default)
      - wrap {string} soft|hard soft by default

      <Textarea
        name="aDescription"
        validate={['required']}
        autofocus={true}
        maxlength="42"
      />

  D) For the submit's button
    Availables props :
      - label {string} ('Send' by default)

      <Submit />
