import React, { Component } from 'react'
import './_DetailsOrder.scss'

class DetailsOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }

    render() {
        return (
            <div>
                <div className="bodyOrder bodyDetailsOrder">
                    <div className="container containerDetailsOrder">
                        <div className="detailsPizza">
                            <div>
                                <p className="titleP">Chi tiết đơn hàng</p>
                            </div>
                            <div className="pizzaName">
                                <p className="">
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
                                        <h2>{this.state.clicks}</h2>
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

                    <div className="totalBill">
                        <div className="elmBill">
                            <div>
                                <p>Tổng cộng:</p>
                            </div>
                            <div>
                                <p>472.000đ</p>
                            </div>
                        </div>
                    </div>
                    <div className="coverPayment">
                        <div className="divPayment">
                            <button className="Payment">
                                Thanh toán
                            </button>
                        </div>
                    </div>

                    </div>
                    </div>

            </div>
        )
    }
}
export default DetailsOrder
