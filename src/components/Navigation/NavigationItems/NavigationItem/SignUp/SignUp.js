import React, { Component } from 'react'
import './_SignUp.scss'
class SignUp extends Component {
  render () {
    return (
      <div>
          <section class="dominoRegister">
              <div className="coverSignUp">
                  <div class="container">
                      <div class="row">
                          <div class="col">
                              <h2 class="headtitle">
                                  Đăng ký tài khoản
                              </h2>
                              <div class="form">
                                          <div class="form-horizontal">
                                            <div className="infoSignUp">
                                              <h3>Thông tin đăng nhập</h3>

                                            </div>

                                              <div class="form-group clearfix">
                                                  <label class="custom-control-label">Email</label>
                                                  <div>
                                                      <input type="text" maxlength="100" tabindex="10" class="form-control"/>
                                                      <span title="Vui lòng nhập email."
                                                       style={{display:'none'}}>Vui lòng nhập email.</span>
                                                      <span title="Phải sử dụng địa chỉ email hợp lệ."
                                                      style={{display:'none'}}>Phải sử dụng địa chỉ email hợp lệ.</span>
                                                  </div>
                                              </div>

                                              <div class="form-group clearfix">
                                                  <label class="custom-control-label">Mật khẩu</label>
                                                  <div>
                                                    <span style={{whiteSpace:'normal'}}>
                                                      <input size="20"
                                                        maxlength="20" class="form-control" tabindex="10"
                                                        type="password" style={{width:'100%'}} />
                                                      <input type="hidden" autocomplete="off"/>
                                                      </span>
                                                      <span title="Vui lòng nhập mật khẩu." class="fa fa-exclamation-triangle" style={{display:'none'}}>
                                                        Vui lòng nhập mật khẩu.
                                                      </span>
                                                  </div>
                                              </div>


                                              <div class="form-group clearfix">
                                                  <label class="custom-control-label">Xác nhận mật khẩu</label>
                                                  <div>
                                                      <input type="password" maxlength="20"
                                                       tabindex="10" class="form-control"/>
                                                      <span title="Vui lòng nhập Xác nhận mật khẩu." class="fa fa-exclamation-triangle"
                                                      style={{display:'none'}}>Vui lòng nhập Xác nhận mật khẩu.</span>
                                                      <span title="Mật khẩu xác nhận phải khớp với Mật khẩu." class="fa fa-exclamation-triangle"
                                                        style={{display:'none'}}>Mật khẩu xác nhận phải khớp với Mật khẩu.</span>
                                                  </div>
                                              </div>


                                              <hr/>


                                              <h3>Thông tin tài khoản</h3>
                                              <div class="form-group clearfix">
                                                  <label class="custom-control-label">Điện thoại</label>
                                                  <div>
                                                      <input type="text" maxlength="50"
                                                      tabindex="10" class="form-control"/>
                                                      <span title="Vui lòng nhập số điên thoại" class="fa fa-exclamation-triangle"
                                                      style={{display:'none'}}>Vui lòng nhập số điên thoại</span>
                                                      <span class="fa fa-exclamation-triangle" style={{display:'none'}}></span>
                                                      <span class="fa fa-exclamation-triangle" style={{display:'none'}}>
                                                        Vui lòng nhập điện thoại từ 8-10 số</span>
                                                  </div>
                                              </div>

                                                <div>
                                                  <div class="form-group">
                                                    <label class="custom-control-label col-sm-3">Tên
                                                    </label>
                                                      <div class="col-sm-9">
                                                        <input type="text" maxlength="100" size="45"
                                                        tabindex="10" class="form-control"/>
                                                          <span class="fa fa-exclamation-triangle" style={{display:'none'}}>Vui lòng nhập Tên.</span>
                                                        </div>
                                                  </div>
                                                  <div class="form-group">
                                                    <label class="custom-control-label col-sm-3">Họ
                                                    </label>
                                                      <div class="col-sm-9">
                                                        <input type="text" maxlength="100" size="45"
                                                        tabindex="10" class="form-control"/>
                                                          <span title="Vui lòng nhập Họ." class="fa fa-exclamation-triangle" style= {{display:'none'}}>
                                                            Vui lòng nhập Họ.
                                                          </span>
                                                      </div>
                                                    </div>
                                                </div>


                                                <div class="confirm clearfix">
                                                  <span class="fa fa-exclamation-triangle" onclientvalidate="CheckBoxRequired_ClientValidate"
                                                    style={{ display: "none" }}>
                                                  </span>
                                                </div>
                                                <div class="btn-login"></div>
                                            </div>

                                        <div className="divBtnSignUp">
                                          <div>
                                            <button type="button" className="btn btnSignUp">
                                                Tạo tài khoản
                                              </button>
                                          </div>
                                          <div>
                                            <i class="fas fa-chevron-right"></i>
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
