import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from './container/SignIn';
import Home from './container/Home';
import Product from './container/Product';
import Store from './container/Store';
import PurchaseProduct from './container/purchaseProduct';
import SaleProduct from './container/saleProduct';
import ViewSale from './container/viewSale';
import  StockList  from './container/viewStock';
import Chart from './container/Chart';


export default class Routing extends Component{

   

  

    render(){
       
        return(
            <Router >
           <div>
              
            <Route exact path="/" component={SignIn}/>
            <Route path="/home" component={Chart}/>
            <Route path="/products" component={Product}/>
            <Route path="/store" component={Store}/>
            <Route path="/purchase" component={PurchaseProduct}/>
            <Route path="/sale" component={SaleProduct}/>
            <Route path="/sales" component={ViewSale}/>
            <Route path="/stock" component={StockList}/>
            <Route path="/chart" component={Chart}/>
            </div>
        </Router>
        )
    }
}

