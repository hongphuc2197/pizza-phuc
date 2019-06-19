import React,{Component} from 'react';
import PizzaLogo from '../../assets/images/pizza-logo.png';
import  './_Footer.scss';

class Footer extends Component{
    render(){
        return(
            <footer classNameName='footer-1'>
                <article>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 left-footer">
                                <div className="ModuleFooter">
                                    <ul class="copyright">
                                        <li><span>© 2019 DOMINO'S PIZZA VIETNAM</span></li>
                                        <li><a href="#/">PRIVACY POLICY</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-6 right-footer">
                                <div className="hotline">
                                    <h2>Hotline<span>Đặt hàng</span></h2>
                                    <a href="#/">
                                        <img src="/Data/Sites/1/media/img/pc/_global/hotline.png" alt=""/></a>
                                </div>
                                <div className="logo_footer">
                                    <img src="/Data/Sites/1/media/img/pc/_global/footer_logo.png" alt=""/>
                                </div>
                            </div>
                            <a className="hotline-fixed" href="tel:19006099"><span className="fas fa-phone"></span></a>
                        </div>
                    </div>
                </article>
                <img src={PizzaLogo}  alt = "MyPizza" />
            </footer>
        )
    }
}



export default Footer;