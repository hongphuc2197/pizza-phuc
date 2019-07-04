import React, { Component } from 'react'

import pay1 from '../../../assets/images/checkout/pay1.png';
import pay2 from '../../../assets/images/checkout/pay2.png';
import pay3 from '../../../assets/images/checkout/pay3.png';
import pay4 from '../../../assets/images/checkout/pay4.png';

import './_Checkout.scss'

class Checkout extends Component {
  render () {
    return (
      <div className="coverCheckout">
         <section class="checkout step-4">
         <div class="container">
           <div class="">
             <div class="page-title col-12 Module Module-322">
                <div class="ModuleContent">
                  <h2>điền thông tin thanh toán</h2>
                  </div>
              </div>

                 <div class="col-12 col-thanhtoan-left Module Module-260">
                   <div class="ModuleContent">
                     <div class="page-content">
                        <div class="form row">
                          <div class="form-group col-12">
                            <label>Họ và tên khách hàng</label>
                            <input class="form-control" type="text" name="Address_FirstName" placeholder="Nhập họ tên" value=""/>
                          </div>
                          <div class="form-group col-6">
                            <label>Email</label>
                            <input type="text" class="form-control" name="Address_Email" placeholder="Nhập email" value=""/>
                          </div>
                          <div class="form-group col-6">
                            <label>Điện thoại</label>
                            <input class="form-control" type="text" name="Address_Phone" placeholder="Nhập Số điện thoại" value=""/>
                          </div>
                          <div class="form-group col-12">
                            <label>Ghi chú cho đơn hàng</label>
                            <textarea class="form-control" name="OrderNote" cols="30" rows="2"></textarea>
                          </div>
                          <div class="form-group col-12">
                            <label>Phương thức thanh toán</label>
                            <div class="pay-method">
                              <div className="coverMethod">
                                <div for="1" class="active">
                                  <div class="img">
                                    <img alt="" src={pay1}/>
                                  </div>
                                  <div class="radio">
                                    <input type="radio" name="PaymentMethod" style={{display:'none'}} id="1" value="1" checked="checked"/>
                                    </div>
                                    <span>Thanh toán khi nhận hàng</span>
                                    </div>
                                <div for="2" class=""><div class="img">
                                  <img alt="" src={pay2}/>
                                    </div>
                                    <div class="radio">
                                      <input type="radio" name="PaymentMethod" style={{display:'none'}} id="2" value="2"/>
                                        </div>
                                        <span>Thanh toán bằng thẻ ATM</span>
                                      </div>

                                <div for="3" class="">
                                  <div class="img">
                                    <img alt="" src={pay3}/>
                                  </div>
                                  <div class="radio">
                                    <input type="radio" name="PaymentMethod" style={{display:'none'}} id="3" value="3"/>
                                  </div>
                                  <span>Thanh toán thẻ tín dụng</span>
                                </div>

                                <div for="4">
                                  <div class="img">
                                    <img alt="" src={pay4}/>
                                  </div>
                                      <div class="radio">
                                        <input type="radio" name="PaymentMethod" style={{display:'none'}} id="4" value="4"/>
                                      </div>
                                  <span>Thanh toán qua ZaloPay</span>
                                </div>
                              </div>
                            </div>
                            <div class="accept-license">
                              <input id="PaymentAgree" type="checkbox" checked="" name="PaymentAgree"/>
                              <label for="PaymentAgree" class="active">Tôi đã đọc và đồng ý điều khoản trên</label>
                            </div>
                            <div class="desc">
                              <p>Cảm ơn quý khách đã đặt hàng tại Domino's Pizza Việt Nam. Nếu có bất kỳ vấn đề nào về dịch vụ của DOMINO'S PIZZA, vui lòng liên hệ 1900 6099</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Checkout
