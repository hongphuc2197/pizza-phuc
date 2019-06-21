import React, { Component } from 'react'
import './_Body.scss';

import SignUp from './../Navigation/NavigationItems/NavigationItem/SignUp/SignUp'
import SignIn from './../Navigation/NavigationItems/NavigationItem/SignIn/SignIn'
class Body extends Component {
  render () {
    return (
      <div className="bodyPage">
        <SignIn />
        <SignUp />
      </div>
    )
  }
}

export default Body
