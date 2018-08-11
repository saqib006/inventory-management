import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../components/NavBar';
import authAction from '../store/action/authAction';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
           
        }
        console.log(props)
    }

   
    navHandler = text => {
        if(text === 'Products'){
            this.props.history.replace('/products')

        }
        else if (text === 'Store'){
            this.props.history.replace('/store')
        }

        else if (text === 'Purchase Product'){
            this.props.history.replace('/purchase')
        }
        else if (text === 'Sale Product'){
            this.props.history.replace('/sale')
        }

        else if (text === 'Sales List'){
            this.props.history.replace('/sales')
        }

        else if (text === 'Stock'){
            this.props.history.replace('/stock')
        }

        else if (text === 'Chart'){
            this.props.history.replace('/chart')
        }
    }

    

    componentWillMount(){
        if(this.props.user == null){
            this.props.history.replace("/")
        }
    }
    

    render(){
        return(
            <div>
            <NavBar navHandler={this.navHandler} userName={this.props.user?this.props.user.displayName: ""} />


            
            
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        user: state.authReducer.user,
        isLoad: state.authReducer.isLoad,
        isErr: state.authReducer.isErr,
        errMsg: state.authReducer.errMsg
    }
}



export default connect(mapStateToProps, null)(Home);