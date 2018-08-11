import React, {Component} from 'react';
import { Button, Grid,  FormControl, InputLabel, Input, AppBar, Toolbar, Typography, Paper} from '@material-ui/core';
import authAction from '../store/action/authAction';
import {connect} from 'react-redux';


class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            pass: ''
        }

        console.log(props)
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    btnHandler = () => {
        let userInfo = {
            email: this.state.email,
            pass: this.state.pass
        }

        this.props.signIn(userInfo);
        console.log(userInfo)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user){
            this.props.history.replace("/home")
        }

      
      
    }

    componentDidMount(){
       this.props.checkUser()
    }

    styles = {
        text: {
            marginTop: 20,
            marginBottom: 20,
        }
        
    }

    render(){
        return(
            <div>
               <AppBar position="static">
                <Toolbar>
                
                <Typography style={{flexGrow: 1}} variant="title" color="inherit" >
                    Inventory Management
                </Typography>
                
                </Toolbar>
                </AppBar>

                <Grid style={{marginTop:"10%"}} container spacing={16} direction="column" alignItems="center" >
                    <Grid container justify="center" direction="row">
                        <Grid item xs={12} md={4} >
                        
                        <Paper >

                        <div style={{margin:50}}>
                        <FormControl fullWidth style={this.styles.text} >
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id='email' name="email" value={this.state.email} onChange={this.changeHandler}/>
                        </FormControl>

                        <FormControl fullWidth style={this.styles.text} >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id='password' type="password" name="pass" value={this.state.pass} onChange={this.changeHandler}/>
                        </FormControl>


                        <Button style={this.styles.text} onClick={this.btnHandler} variant="contained" color="secondary" disabled={this.props.isLoad} >SignIn</Button>
                        </div>
                       
                        </Paper>
                        </Grid>
                    </Grid>
                </Grid>
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

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: user => { return dispatch(authAction.signInP(user))},
        checkUser: () => { return dispatch(authAction.checkUser_P())} 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);