import React, { Component } from 'react'
import './_SignUp.scss'
class SignUp extends Component {
  render () {
    return (
      <div>
          <section class="domino_register_1">
              <div id="ctl00_mainContent_pnlRegister">
                  <div class="container">
                      <div class="row">
                          <div class="col">
                              <h2 class="headtitle">
                                  Đăng ký tài khoản
                              </h2>
                              <div class="form-wrap form">
                                  <div id="ctl00_mainContent_pnlRegisterWrapper">
                                      <div id="ctl00_mainContent_pnlStandardRegister">
                                          <div id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_divPreamble" class="regpreamble"></div>
                                          <div class="form-horizontal">
                                              <div id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_pnlRequiredProfilePropertiesUpper">
                                              </div>
                                              <h3>Thông tin đăng nhập</h3>
                                              <div class="form-group clearfix">
                                                  <label for="ctl00_mainContent_RegisterUser_CreateUserStepContainer_Email" class="settinglabel control-label">Email</label>
                                                  <div class="settingcontrol">
                                                      <input name="ctl00$mainContent$RegisterUser$CreateUserStepContainer$Email"
                                                       type="text" maxlength="100" id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_Email"
                                                        tabindex="10" class="form-control"/>
                                                      <span id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_EmailRequired"
                                                       title="Vui lòng nhập email." class="fa fa-exclamation-triangle"
                                                       style="display:none;">Vui lòng nhập email.</span>
                                                      <span id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_EmailRegex"
                                                      title="Phải sử dụng địa chỉ email hợp lệ." class="fa fa-exclamation-triangle"
                                                      style="display:none;">Phải sử dụng địa chỉ email hợp lệ.</span>
                                                  </div>
                                              </div>

                                              <div class="form-group clearfix">
                                                  <label for="ctl00_mainContent_RegisterUser_CreateUserStepContainer_Password"
                                                  class="settinglabel control-label">Mật khẩu</label>
                                                  <div class="settingcontrol">
                                                    <span id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_Password_wrapper"
                                                    class="RadInput RadInput_Default" style="white-space:normal;">
                                                      <input id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_Password"
                                                        name="ctl00$mainContent$RegisterUser$CreateUserStepContainer$Password" size="20"
                                                        maxlength="20" class="riTextBox riEnabled form-control" tabindex="10"
                                                        type="password" style="width:100%;" />
                                                      <input id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_Password_ClientState"
                                                        name="ctl00_mainContent_RegisterUser_CreateUserStepContainer_Password_ClientState"
                                                        type="hidden" autocomplete="off"
                                                        value="{&quot;enabled&quot;:true,&quot;emptyMessage&quot;:&quot;&quot;,
                                                        &quot;validationText&quot;:&quot;&quot;,&quot;valueAsString&quot;:&quot;&quot;,&quot;
                                                        lastSetTextBoxValue&quot;:&quot;&quot;}" />

                                                      </span>
                                                      <span id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_PasswordRequired"
                                                      title="Vui lòng nhập mật khẩu." class="fa fa-exclamation-triangle" style="display:none;">
                                                        Vui lòng nhập mật khẩu.
                                                      </span>

                                                  </div>
                                              </div>
                                              <div class="form-group clearfix">
                                                  <label for="ctl00_mainContent_RegisterUser_CreateUserStepContainer_ConfirmPassword"
                                                   class="settinglabel control-label">Xác nhận mật khẩu</label>
                                                  <div class="settingcontrol">
                                                      <input name="ctl00$mainContent$RegisterUser$CreateUserStepContainer$ConfirmPassword"
                                                       type="password" maxlength="20"
                                                       id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_ConfirmPassword"
                                                       tabindex="10" class="form-control"/>
                                                      <span id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_ConfirmPasswordRequired"
                                                      title="Vui lòng nhập Xác nhận mật khẩu." class="fa fa-exclamation-triangle"
                                                      style="display:none;">Vui lòng nhập Xác nhận mật khẩu.</span>
                                                      <span id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_PasswordCompare"
                                                       title="Mật khẩu xác nhận phải khớp với Mật khẩu." class="fa fa-exclamation-triangle"
                                                        style="display:none;">Mật khẩu xác nhận phải khớp với Mật khẩu.</span>

                                                  </div>
                                              </div>
                                              <hr/>
                                              <h3>Thông tin tài khoản</h3>
                                              <div id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_pnlUserName"
                                              class="form-group clearfix">
                                                  <label for="ctl00_mainContent_RegisterUser_CreateUserStepContainer_UserName"
                                                  class="settinglabel control-label">Điện thoại</label>
                                                  <div class="settingcontrol">
                                                      <input name="ctl00$mainContent$RegisterUser$CreateUserStepContainer$UserName" 
                                                      type="text" maxlength="50" 
                                                      id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_UserName" 
                                                      tabindex="10" class="form-control"/>
                                                      <span id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_UserNameRequired" 
                                                      title="Vui lòng nhập số điên thoại" class="fa fa-exclamation-triangle"
                                                      style="display:none;">Vui lòng nhập số điên thoại</span>
                                                      <span id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_regexUserName" 
                                                      class="fa fa-exclamation-triangle" style="display:none;"></span>
                                                      <span id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_regexUserName2" 
                                                      class="fa fa-exclamation-triangle" style="display:none;">
                                                        Vui lòng nhập điện thoại từ 8-10 số</span>
                                                  </div>
                                                </div>
                                                <div id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_pnlRequiredProfileProperties">
                                                  <div class="settingrow form-group">
                                                    <label for="ctl00_mainContent_RegisterUser_CreateUserStepContainer_txtFirstName" 
                                                    class="settinglabel control-label col-sm-3">Tên
                                                    </label>
                                                      <div class="col-sm-9">
                                                        <input name="ctl00$mainContent$RegisterUser$CreateUserStepContainer$txtFirstName" 
                                                        type="text" maxlength="100" size="45" 
                                                        id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_txtFirstName" 
                                                        tabindex="10" class="form-control"/>
                                                          <span id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_ctl05" title="Vui lòng nhập Tên." 
                                                          class="fa fa-exclamation-triangle" style="display:none;">Vui lòng nhập Tên.</span>
                                                      </div>
                                                </div>
                                                  <div class="settingrow form-group">
                                                    <label for="ctl00_mainContent_RegisterUser_CreateUserStepContainer_txtLastName" 
                                                    class="settinglabel control-label col-sm-3">Họ
                                                    </label>
                                                      <div class="col-sm-9">
                                                        <input name="ctl00$mainContent$RegisterUser$CreateUserStepContainer$txtLastName" 
                                                        type="text" maxlength="100" size="45" 
                                                        id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_txtLastName" 
                                                        tabindex="10" class="form-control"/>
                                                          <span id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_ctl11" 
                                                              title="Vui lòng nhập Họ." class="fa fa-exclamation-triangle" style= {{display:'none'}}>
                                                            Vui lòng nhập Họ.
                                                            </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                <div id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_divAgreement" class="regagree">
                                                </div>
                                                <div class="confirm clearfix">
                                                  <span id="ctl00_mainContent_RegisterUser_CreateUserStepContainer_MustAgree"
                                                    class="fa fa-exclamation-triangle" onclientvalidate="CheckBoxRequired_ClientValidate"
                                                    style={{ display: "none" }}>
                                                  </span>
                                                </div>
                                                <div class="hvr-shutter-out-horizontal btn-login"></div>
                                            </div>
                                        <table cellspacing="5" cellpadding="5" style="height:100%;width:100%;">
                                      <tbody>
                                        <tr align="right">
                                          <td align="center">
                                            <input type="submit"
                                            name="ctl00$mainContent$RegisterUser$__CustomNav0$StepNextButtonButton"
                                            value="Tạo tài khoản" id="ctl00_mainContent_RegisterUser___CustomNav0_StepNextButtonButton"
                                            class="btn btn-default createuserbutton" style={{fontWeight:"bold"}} />
                                          </td>
                                          </tr>
                                        </tbody>
                                        </table>
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
