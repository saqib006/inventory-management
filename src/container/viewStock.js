import React, {Component} from 'react';
import {Grid, TableBody, Table, TableCell,TableRow,TableHead} from '@material-ui/core';
import NavBar from '../components/NavBar';
import {connect} from 'react-redux';
import stockAction from '../store/action/stockAction';


class StockList extends Component{

    constructor(props){
        super(props);

       this.props.getStock() 

        console.log('list', props.stockList)

      

     


    }



    componentWillMount(){
        if(this.props.user == null){
            this.props.history.replace("/")
        }
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
                    <TableCell>Product</TableCell>
                    <TableCell >Store</TableCell>
                    <TableCell >Stock</TableCell>
                    
                    
                    
                </TableRow>
                </TableHead>
                <TableBody>
              {
                  this.props.stockList.map(stock=>{
                      return(
                        <TableRow>
                        <TableCell>{stock.productName}</TableCell>
                        <TableCell >{stock.storeName}</TableCell>
                        <TableCell >{stock.quantity}</TableCell>
                        
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
        productList: state.stockReducer.productList,
        storeList:state.stockReducer.storeList,
        stockList:state.stockReducer.stock
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
       getStock: ()=>{return dispatch(stockAction.getStock())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockList);