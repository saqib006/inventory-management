import React, {Component} from 'react';
import {Grid, Table, TableBody, TableCell,TableRow,TableHead} from '@material-ui/core';
import NavBar from '../components/NavBar';
import {connect} from 'react-redux';
import stockAction from '../store/action/stockAction';


class ViewSale extends Component{

    constructor(props){
        super(props);

        console.log(props)
      
       
        
    }

    componentWillMount(){
        if(this.props.user == null){
            this.props.history.replace("/")
        }
        this.props.getSales()
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

    render(){
        return(
            
            <div>
                <NavBar navHandler={this.navHandler} userName={this.props.user?this.props.user.displayName: ""} />
                     <Grid container spacing={16} style={{marginTop:20}} direction="row" justify="center">
                         <Grid item xs={12} sm={8}>
                <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell >Store</TableCell>
                    <TableCell >Quantity</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell >Volume</TableCell>
                    <TableCell >Date</TableCell>
                    
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        this.props.salesList.map(item => {
                         
                            return(
                            <TableRow key={item.key}>
                            <TableCell>{item.productName}</TableCell>
                            <TableCell>{item.storeName}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>${item.quantity * item.price}</TableCell>
                            <TableCell>{item.date}</TableCell>
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
        storeList: state.stockReducer.storeList,
        salesList:state.stockReducer.salesList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
       getSales: () => {return dispatch(stockAction.getSales())},
     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSale);