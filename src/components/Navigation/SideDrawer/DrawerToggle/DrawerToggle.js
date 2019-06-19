import React,{Component} from 'react';
import './_DrawerToggle.scss';

class drawerToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            toggleClass:''
        };
    }
    addActiveClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState, toggleClass: this.state.toggleClass === 'change' ? '' : 'change' });
        //not sure what to do here
    }

    render(){
        const { state: { toggleClass } } = this
      return(
        <div>
            <div onClick = {this.addActiveClass} className ='DrawerToggleContainer'>
                <div className={`${toggleClass} bar1 bar `}></div>
                <div className={`${toggleClass} bar2 bar `}></div>
                <div className={`${toggleClass} bar3 bar `}></div>
            </div>
        </div>
      )
    }
}


export default drawerToggle;