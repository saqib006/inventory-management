import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../components/NavBar';
import stockAction from '../store/action/stockAction';
import authAction from '../store/action/authAction';
import {Dialog, DialogActions, DialogContent, DialogTitle, Button, FormControl, Input, InputLabel, Grid, Paper, List} from '@material-ui/core';
import ProductList from './productList';





class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            dialogOpen: false,
            name:'',
            manufacturer: '',
            description: '',
            btnName:'Add',
            key:''
        }
        console.log(props)
        this.props.getProduct();
      
    
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

    
    openDialog = () => {
        
        this.setState({
            dialogOpen:true,
            name: '',
            manufacturer: '',
            description: '',
            btnName: 'Add'
            
        })
      
    }

    closeDialog = () => {
        this.setState({
            dialogOpen: false
        })
    }

   

    changeHandler = (eve) => {
        this.setState({[eve.target.name]: eve.target.value})
    }


    

    formHandler = (eve) => {
        eve.preventDefault();
        if(this.state.btnName === 'Add'){
            
            

            let productInfo = {
                key:new Date().getTime(),
                name: this.state.name,
                manufacturer: this.state.manufacturer,
                description: this.state.description
            }
    
            this.props.pushProduct(productInfo)
    
            

                this.setState({
                    dialogOpen:false,
                    name: '',
                    manufacturer: '',
                    description: ''
                    
                })
       

           
        }

        else if (this.state.btnName === 'Update'){
           
            
           
            let updateInfo = {
               key: this.state.key,
                name: this.state.name,
                manufacturer: this.state.manufacturer,
                description: this.state.description
            }

            this.props.updateProduct(updateInfo);
            
            setTimeout(()=>{
                this.setState({
                    name:'',
                    manufacturer: '',
                    description: '',
                    key:'',
                    dialogOpen:false
                })
         
            }, 100)
            
        }
    }

   
   

   
    editHandler = (key) => {

        
        console.log('edit key', key)

        let index = this.props.productList.findIndex(ele => ele.key === key)
        console.log('index', index)

       let obj = this.props.productList[index]
       
        this.setState({
            key:key,
            btnName:'Update',
            name: obj.name,
            manufacturer: obj.manufacturer,
            description: obj.description,
            dialogOpen: true,
        })
    }
    

    deleteHandler = (key) => {
        console.log('id', key)
        this.props.deleteProduct(key)
    }

    componentWillMount(){
        if(this.props.user == null){
            this.props.history.replace("/")
        }
    }
    

    render(){
        return(
            <div>
             <NavBar navHandler={this.navHandler}  userName={this.props.user?this.props.user.displayName: ""} />
                <Button variant='contained' color="secondary" onClick={this.openDialog}>Add Product</Button>


                <Dialog
          fullScreen={false}
          open={this.state.dialogOpen}
          onClose={this.closeDialog}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Add New Product Details"}</DialogTitle>
          <DialogContent>
            

            <FormControl fullWidth >
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id='name' name="name" value={this.state.name} onChange={this.changeHandler}/>
            </FormControl>
           
            <FormControl fullWidth >
            <InputLabel htmlFor="manufacturer">Manufacturer</InputLabel>
            <Input id='manufacturer' name="manufacturer" value={this.state.manufacturer} onChange={this.changeHandler}/>
            </FormControl>

            <FormControl fullWidth >
            <InputLabel htmlFor="Description">Description</InputLabel>
            <Input id='Description' name="description" value={this.state.description} onChange={this.changeHandler}/>
            </FormControl>


            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeDialog} color="primary">
              Reset
            </Button>
            <Button onClick={this.formHandler} color="primary" autoFocus>
            {this.state.btnName}
            </Button>
          </DialogActions>
        </Dialog>

            <Grid container>
                <Grid item sm>
                <Paper>
                <List>
                {
                    this.props.productList.map(item => {
                        return <ProductList product={item} id={item.key} delete={ ()=> this.deleteHandler(item.key)} editHandler={()=>this.editHandler(item.key)}/>
                    })
                }
                    
               
                </List>
                </Paper>
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
        isLoad: state.stockReducer.isLoad,
        isErr: state.stockReducer.isErr,
        errMsg: state.stockReducer.errMsg
    }
}

const mapDispatchToProps = (dispatch) => {

    

    return{
        pushProduct: productDetail => { return dispatch(stockAction.addProduct(productDetail))},
    
        deleteProduct : key => {dispatch(stockAction.deleteProduct(key))},
        updateProduct: updateInfo => {return dispatch(stockAction.updateProduct(updateInfo))},
        getProduct: () => {return dispatch(stockAction.getProduct())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);