import stockAction from '../store/action/stockAction';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid , FormControl, Input, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import NavBar from '../components/NavBar';



class PurchaseProduct extends Component{
    constructor(props){
        super(props);

        this.state = {
            storeName: '',
            productName:'',
            date:null,
            quantity: null,
            price:null,
       
            
        }

        console.log(props.storeList)

    this.style = {
        margin:{
            marginTop:20
        }
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

    componentWillMount(){
        if(this.props.user == null){
            this.props.history.replace("/")
        }
    }

    changeHandler = (eve) => {
        this.setState({[eve.target.name]: eve.target.value})
       
    }

    formHandler = () => {
        let purchaseInfo = {
            type:"purchase",
            key:new Date().getTime(),
            storeKey: this.state.storeName.split('_')[1],
            productKey:this.state.productName.split('_')[1],
            storeName: this.state.storeName.split('_')[0],
            productName:this.state.productName.split('_')[0],
            date: this.state.date,
            quantity: parseInt(this.state.quantity,10),
            price:parseInt(this.state.price,10),
        }
        this.props.purchaseInfo(purchaseInfo)


        

        this.setState({
            storeName: '',
            productName:'',
            date: null,
            quantity: null,
            price:null,
        })
        console.log(purchaseInfo)
    }

    render(){
        
        return(
            <div>
            <NavBar navHandler={this.navHandler} userName={this.props.user?this.props.user.displayName: ""} />
            
            <Grid container spacing={16} direction="column" style={{marginTop:20,justifyContent:'center',alignItems:"center"}}>
            <Grid container spacing={16} direction="row" style={{marginTop:20,justifyContent:'center'}}>
            <Grid item xs={12} sm={6} >

            

            <FormControl fullWidth>
                <InputLabel htmlFor="name">Store</InputLabel>
                
          <Select
            value={this.state.storeName}
            onChange={this.changeHandler}
            input={<Input name="storeName" id="name" />}
          >
            
           {
               this.props.storeList.map(store => {
                   return (
                    <MenuItem value={store.name+'_'+store.key} key={store.key}>{store.name}</MenuItem>
                   )
               })
           }
            
            
            
          </Select>
                </FormControl>
           


          
            <FormControl fullWidth style={this.style.margin}>
                <InputLabel htmlFor="product">Product</InputLabel>
                
          <Select
            value={this.state.productName}
            onChange={this.changeHandler}
            input={<Input name="productName" id="product" />}
          >
            
           {
               this.props.productList.map(product => {
                   return (
                    <MenuItem value={product.name+'_'+product.key} key={product.key}>{product.name}</MenuItem>
                   )
               })
           }
            
            
            
          </Select>
                </FormControl>
            

          
            <FormControl fullWidth style={this.style.margin}>
               
            <InputLabel htmlFor="date">Date</InputLabel>
                
           <Input type="date" onChange={(event) => this.setState({date: event.target.value})}/>
                </FormControl>
           

            
            <FormControl fullWidth style={this.style.margin}>
               
            <InputLabel htmlFor="quantity">Quantity</InputLabel>
                <Input onChange={(event) => this.setState({quantity: event.target.value})} value={this.state.quantity} type="number"  id="quantity"/>
       
                </FormControl>


                 <FormControl fullWidth style={this.style.margin}>
               
               <InputLabel htmlFor="price">Unit Price</InputLabel>
                   <Input onChange={(event) => this.setState({price: event.target.value})} value={this.state.price} type="number"  id="price"/>
          
                   </FormControl>

                   

                   <FormControl  style={this.style.margin}>
               
                   <Button variant="contained" color="secondary" onClick={this.formHandler}> Add </Button>
          
                   </FormControl>

                   
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
        storeList: state.stockReducer.storeList,
        productList:state.stockReducer.productList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        purchaseInfo: purchaseDetail => {return dispatch(stockAction.addPurchase(purchaseDetail))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseProduct);