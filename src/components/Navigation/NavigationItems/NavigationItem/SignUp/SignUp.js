import React, { Component } from 'react'
import './_SignUp.scss'
class SignUp extends Component {
  render () {
    return (
      <div>
          <section className="dominoRegister">
              <div className="coverSignUp">
                  <div className="container">
                      <div className="row">
                          <div className="col">
                              <h2 className="headtitle">
                                  Đăng ký tài khoản
                              </h2>
                              <div className="form">
                                          <div className="form-horizontal">
                                              <h3>Thông tin đăng nhập</h3>

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


                                              <div className="form-group clearfix">
                                                  <label>Xác nhận mật khẩu</label>
                                                  <div>
                                                      <input type="password" maxLength="20"
                                                       tabIndex="10" className="form-control"/>
                                                      <span title="Vui lòng nhập Xác nhận mật khẩu." className="fa fa-exclamation-triangle"
                                                      style={{display:'none'}}>Vui lòng nhập Xác nhận mật khẩu.</span>
                                                      <span title="Mật khẩu xác nhận phải khớp với Mật khẩu." className="fa fa-exclamation-triangle"
                                                        style={{display:'none'}}>Mật khẩu xác nhận phải khớp với Mật khẩu.</span>
                                                  </div>
                                              </div>


                                              <hr/>


                                              <h3>Thông tin tài khoản</h3>
                                              <div className="form-group clearfix">
                                                  <label>Điện thoại</label>
                                                  <div>
                                                      <input type="text" maxLength="50"
                                                      tabIndex="10" className="form-control"/>
                                                      <span title="Vui lòng nhập số điên thoại" className="fa fa-exclamation-triangle"
                                                      style={{display:'none'}}>Vui lòng nhập số điên thoại</span>
                                                      <span className="fa fa-exclamation-triangle" style={{display:'none'}}></span>
                                                      <span className="fa fa-exclamation-triangle" style={{display:'none'}}>
                                                        Vui lòng nhập điện thoại từ 8-10 số</span>
                                                  </div>
                                              </div>

                                                  <div className="form-group">
                                                    <label className="custom-control-label col-sm-3">Tên
                                                    </label>
                                                      <div className="col-sm-9">
                                                        <input type="text" maxLength="100" size="45"
                                                        tabIndex="10" className="form-control"/>
                                                          <span className="fa fa-exclamation-triangle" style={{display:'none'}}>Vui lòng nhập Tên.</span>
                                                        </div>
                                                  </div>
                                                  <div className="form-group">
                                                    <label className="custom-control-label col-sm-3">Họ
                                                    </label>
                                                      <div className="col-sm-9">
                                                        <input type="text" maxLength="100" size="45"
                                                        tabIndex="10" className="form-control"/>
                                                          <span title="Vui lòng nhập Họ." className="fa fa-exclamation-triangle" style= {{display:'none'}}>
                                                            Vui lòng nhập Họ.
                                                          </span>
                                                      </div>
                                                    </div>


                                                {/* <div className="confirm clearfix">
                                                  <span className="fa fa-exclamation-triangle"
                                                    style={{ display: "none" }}>
                                                  </span>
                                                </div>
                                                <div className="btn-login"></div> */}
                                            </div>

                                        <div className="divBtnSignUp">
                                            <button type="button" className="btnSignUp">
                                                Tạo tài khoản
                                                <i className="fas fa-chevron-right"></i>
                                            </button>
                                          <div>
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

export default SignUp
