import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import HomePage from './container/Homepage/Homepage'
import SignInPage from './container/SignInPage/SignInPage'
import SignUpPage from './container/SignUpPage/SignUpPage'

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/signin' exact component={SignInPage} />
            <Route path='/signup' exact component={SignUpPage} />

          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App
