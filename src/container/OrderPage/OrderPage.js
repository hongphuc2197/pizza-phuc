import React, { Component } from 'react'
//import MyOrder from '../../components/Navigation/NavigationItems/NavigationItem/MyOrder/MyOrder'
import BodyOrder from './../../components/Body/Body'
import Pizza from './../../components/Body/Menu/Pizza/Pizza'

class OrderPage extends Component {
  render () {
    return (
      <div>
        <BodyOrder />
        <Pizza/>
      </div>
    )
  }
}

export default OrderPage
