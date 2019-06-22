import React, { Component } from 'react'
import './_SignIn.scss'
class SignIn extends Component {
  render () {
    return (
      <div>
          <section className="dominoRegister LoginSection">
              <div className="coverSignUp">
                  <div className="container">
                      <div className="row">
                          <div className="col">
                              <h2 className="headtitle">
                                  Đăng nhập
                              </h2>
                              <div className="form">
                                <div className="form-horizontal">
                                    <h3>Vui lòng nhập email và mật khẩu</h3>
                                    <div className="form-group clearfix">
                                        <label>Email</label>
                                        <div>
                                            <input type="text" maxLength="100" tabIndex="10" className="form-control"/>
                                            <span title="Vui lòng nhập email."
                                              style={{display:'none'}}>Vui lòng nhập email.</span>
                                            <span title="Phải sử dụng địa chỉ email hợp lệ."
                                            style={{display:'none'}}>Phải sử dụng địa chỉ email hợp lệ.</span>
                                        </div>
                                    </div>

                                    <div className="form-group clearfix">
                                        <label>Mật khẩu</label>
                                        <div>
                                          <span style={{whiteSpace:'normal'}}>
                                            <input size="20"
                                              maxLength ="20" className="form-control" tabIndex="10"
                                              type="password" style={{width:'100%'}} />
                                            <input type="hidden" autoComplete="off"/>
                                            </span>
                                            <span title="Vui lòng nhập mật khẩu." className="fa fa-exclamation-triangle" style={{display:'none'}}>
                                              Vui lòng nhập mật khẩu.
                                            </span>
                                        </div>
                                    </div>

                                    <div className="divBtnSignUp divLogin">
                                        <button type="button" className="btnSignUp">
                                            Đăng nhập
                                            <i className="fas fa-chevron-right"></i>
                                        </button>
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

export default SignIn
