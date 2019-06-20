import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classes from './_Layout.scss';
import Footer from './../../components/Footer/Footer';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from './../../components/Navigation/SideDrawer/SideDrawer';
import Body from './../../components/Body/Body';
class Layout extends Component{
    state = {
        showSideDrawer: false
    }
    SideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }
    sideDrawerToggleHandler = () =>{
        this.setState ((prevState) =>  {
        return {showSideDrawer: !prevState.showSideDrawer};
    });
    }
    render(){
        return(
         <>
            <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler}/>
            <SideDrawer  closed = {this.SideDrawerClosedHandler}
                         open = {this.state.showSideDrawer}
            />
            <main className={classes.Content}>
                {this.props.children}
            </main>
            <Body/>
            <Footer/>
        </>
        );
    }

};

Layout.propTypes = {
     children: PropTypes.element.isRequired
}
export default Layout;