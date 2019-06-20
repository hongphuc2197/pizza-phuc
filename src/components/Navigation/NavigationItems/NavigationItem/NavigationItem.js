import React from 'react'
import { NavLink } from 'react-router-dom'
import './_NavigationItem.scss'
import PropTypes from 'prop-types'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'

const navigationItem = (props) => (
  <li className='NavigationItem'>
    <NavLink to={props.to}
      exact={props.exact}
      activeClassName='active'
    >{props.children}</NavLink>

    <SignIn />
    <SignUp />
  </li>

)

navigationItem.propTypes = {
  children: PropTypes.element
}
export default navigationItem
