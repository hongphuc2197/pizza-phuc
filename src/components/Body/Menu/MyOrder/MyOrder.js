import React, { Component } from 'react'
import './_MyOrder.scss';



class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
      isOpen: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  

  render () {
    return (
      <div className="orderPage">
        <div className="titleOrder">
            <div>
                <p>Giỏ Hàng</p>
            </div>
            <div>
                <i class="fas fa-times"></i>
            </div>
        </div>

        <div className="bodyOrder">
          <div className="detailsPizza">
            <div>
              <p>Chi tiết đơn hàng</p>
            </div>
            <div className="pizzaName">
              <p className="detailsOrder">
                <span className="sizePizza">9"</span>
                <span>Name of Pizza</span>
              </p>
            </div>
          </div>
          
          <div className="amountAndPrice">
            <div className="amountOfPizza">
              <div>
                <button onClick={this.IncrementItem}>
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div>
                <button className="btnAmount">
                  <h2>{ this.state.clicks }</h2>
                </button>
              </div>
              <div>
                <button onClick={this.DecreaseItem}>
                  <i class="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div className="pricePizza">
                <p>x59.000 đ</p>
            </div>
          </div>
        </div>

        <div className="totalBill">
          <div className="elmBill">
            <div>
              <p>Tổng cộng:</p>
            </div>
            <div>
              <p>472.000d</p>
            </div>
          </div>
          <div className="divPayment">
            <button className="Payment">
              Thanh toán
            </button>
          </div>
        </div>

      </div>
    )
  }
}

export default OrderPage
