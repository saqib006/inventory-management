import React, {Component} from 'react';
import {Button, Typography, Toolbar, AppBar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider  } from '@material-ui/core';
import Person from "@material-ui/icons/Person";
import MenuIcon from '@material-ui/icons/Menu';
import authAction from '../store/action/authAction';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class NavBar extends Component{
    constructor(props){
        super('navbar',props);

        this.state = {
            openDrawer: false
        }
        
    }

   

    toggleDrawer = open => {
        this.setState({openDrawer: open})
    }

    
   

    render(){


       
        return(
            <div style={{flexGrow: 1}}>
                <AppBar position="static">
                <Toolbar>
                <IconButton color="inherit" aria-label="Menu" onClick={()=>this.toggleDrawer(true)}>
                    <MenuIcon/>
                </IconButton>
                <Typography style={{flexGrow: 1}} variant="title" color="inherit" >
                    Inventory Management
                </Typography>
               <Link to="/" style={{color:'white', textDecoration:"none"}}> <Button color="inherit" onClick={this.props.signOut}>SignOut</Button></Link>
                </Toolbar>
                </AppBar>

                <Drawer anchor="left" open={this.state.openDrawer} onClose={()=>this.toggleDrawer(false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={()=>this.toggleDrawer(false)}
                    onKeyDown={()=>this.toggleDrawer(false)}
                >
                <List>
                    <ListItem component='nav'>
                        <ListItemIcon>
                            <Person/>
                        </ListItemIcon>
                        <Typography variant='title'>Admin</Typography>
                    </ListItem>
                    <Divider light />
                </List>
                    
                    {['Products','Store', 'Purchase Product', 'Sale Product', 'Sales List', 'Stock', 'Chart'].map( value => {
                        return <div><ListItem onClick={() => this.props.navHandler(value)}>
                                    <ListItemText primary={value}/>
                                    
                               </ListItem>
                               <Divider light />
                               </div>
                               
                    })

                    }
                    
                  
                </div>
                </Drawer>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.authReducer.user,
       
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
       signOut : () => {return dispatch(authAction.signOutP());}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);