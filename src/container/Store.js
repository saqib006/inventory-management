import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../components/NavBar';
import {Grid, FormControl, Button, Input, InputLabel, IconButton, Table, TableBody, TableCell,TableRow,TableHead} from '@material-ui/core';
import DeleteIcon  from '@material-ui/icons/Delete';
import stockAction from '../store/action/stockAction';


class Store extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'',
            location:''
        }
        console.log(props.storeList)
    }

    changeHandler = (eve) => {
        this.setState({[eve.target.name]: eve.target.value})
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
        this.props.getStore();
    }

    btnHandler = () => {
      
        let storeInfo = {
            key: new Date().getTime(),
            name: this.state.name,
            location:this.state.location
        }
        console.log(storeInfo)
        this.props.addStore(storeInfo)

       this.setState({
           name:'',
           location:''
       })

    }

    deleteHandler = key => {
        this.props.deleteStore(key)
    }

    render(){
        return(
            <div>
              <NavBar navHandler={this.navHandler}  userName={this.props.user?this.props.user.displayName: ""} />
                <Grid container spacing={16} style={{marginTop:20}} justify="center">
                <Grid item xs={12} sm={2} >
                <Button style={{padding:15}} fullWidth variant="contained" color="secondary" onClick={this.btnHandler}>Add Store</Button>
                </Grid>
                
                <Grid item xs={12} sm={5}>
                <FormControl fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id='name' name="name" value={this.state.name}  onChange={this.changeHandler}/>
                </FormControl>
                </Grid>

                <Grid item  xs={12} sm={5}>
                <FormControl fullWidth >
                <InputLabel htmlFor="location">Location</InputLabel>
                <Input id='location' name="location" value={this.state.location}  onChange={this.changeHandler}/>
                </FormControl>

                </Grid>
                </Grid>


                <Grid container spacing={16} style={{marginTop:20,justifyContent:"center"}} direction="row" >
                
                <Grid item xs={12} sm={8}>
                <Table >
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell >Location</TableCell>
                    <TableCell >Delete</TableCell>
                    
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        this.props.storeList.map(store => {
                            return(
                                <TableRow key={store.key}>
                                    <TableCell>{store.name}</TableCell>
                                    <TableCell>{store.location}</TableCell>
                                    <TableCell><IconButton onClick={()=>this.deleteHandler(store.key)}><DeleteIcon/></IconButton></TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
                </Table>
                
                </Grid>

                </Grid>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    
    return{
        user: state.authReducer.user,
        storeList: state.stockReducer.storeList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addStore: storeDetail => { return dispatch(stockAction.addStore(storeDetail))}, 
        deleteStore: key => { return dispatch(stockAction.deleteStore(key))},
        getStore: () => {return dispatch(stockAction.getStore())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);