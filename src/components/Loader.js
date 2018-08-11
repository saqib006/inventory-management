import React, {Component} from 'react';
import {CircularProgress, Fade} from '@material-ui/core';
import {connect} from 'react-redux';

class Loader extends Component{

    render(){
        return(
            
            <Fade in={this.props.isLoad}>
            <CircularProgress style={{position:'fixed',top:'50%',left:'45%',width:'50px',height:'50px', zIndex:9999}} />
            </Fade>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoad: state.authReducer.isLoad
    }
}

export default connect(mapStateToProps, null)(Loader);