import React, {Component} from 'react';
import {Grid, TableBody, Table, TableCell,TableRow,TableHead} from '@material-ui/core';
import NavBar from '../components/NavBar';
import {connect} from 'react-redux';
import stockAction from '../store/action/stockAction';
import authAction from '../store/action/authAction';
import {Bar, Line, Pie} from 'react-chartjs-2';



class Chart extends Component{

    constructor(props){
        super(props);

        console.log('list',this.props.salesList.date)
        

        this.state = {
            date:[],
            price:[],
        }

        this.props.salesList.forEach(value=>{
            this.state.date.push(value.date)
        })

        this.props.salesList.forEach(value=>{
            this.state.price.push(value.price)
        })

        console.log(this.state.price)
        
       this.state = {
           chartData:{
            labels: this.state.date,
            datasets: [{
                label: 'Sales',
                data: this.state.price,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
       }

        console.log(props)

       
      
  
     


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
                <NavBar navHandler={this.navHandler}  userName={this.props.user?this.props.user.displayName: ""} />
                     <Grid container spacing={16} style={{marginTop:20}} direction="row" justify="center">
                        <Grid item xs={12} sm={8}>

                        <div className="chart" style={{height:500}}>
                        <Line data={this.state.chartData} options={{
                            title:{
                                display:true,
                                text:'Sales Graph',
                                fontSize:24
                            },
                            legend:{
                                display:true,
                                position:'right'
                            },
                            maintainAspectRatio:false
                        }} />
                        </div>
               
                </Grid>
                </Grid>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
  
    return{
        user: state.authReducer.user,
        salesList:state.stockReducer.salesList
    }
}


export default connect(mapStateToProps, null)(Chart);