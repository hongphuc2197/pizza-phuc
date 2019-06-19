import React,{Component} from 'react';
import PizzaLogo from '../../assets/images/pizza-logo.png';
import  './_Logo.scss';
import PropTypes from 'prop-types';

class Logo extends Component{
    render(){
        return(
            <div className='LogoImg'>
                <img src={PizzaLogo}  alt = "MyPizza" />
            </div>
        )
    }
}


Logo.propTypes = {
    height: PropTypes.string.isRequired
}

export default Logo;