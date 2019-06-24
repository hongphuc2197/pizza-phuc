import React, { Component } from 'react'
import './_Pizza.scss';

class Body extends Component {
  render () {
    return (
      <div className="pizzaPage">
        <div className="container containerPizza">
          <div className="titlePizza">
            <div>
                <p>SIGNATURE</p>
            </div>

            <div className="pricePizza">
              <div className="coverPizza">
                  <div className="coverSize">
                    <p>Large: </p>
                  </div>
                  <div className="coverPrice">
                    <p> 299.000d </p>
                  </div>
              </div>

              <div className="coverPizza" >
                  <div className="coverSize">
                    <p>Medium: </p>
                  </div>
                  <div className="coverPrice">
                    <p> 199.000d </p>
                  </div>
              </div>
              

              </div>

            </div>
          <hr />
          
          <div className="menuPizzaOrder">
            
          </div>
          </div>

      </div>
    )
  }
}

export default Body
