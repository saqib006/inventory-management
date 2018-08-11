import stockAction from '../action/stockAction';

const INITIAL_STATE = {
    isLoad: false,
    isErr:false,
    errMsg: '',
    productList:[],
    storeList:[],
    purchaseList:[],
    salesList:[],
    stock:[]
}

export default function stockReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case stockAction.ADD_PRODUCT_PRO:
            return Object.assign({}, state, {isLoad:true})
        case stockAction.ADD_PRODUCT_SUC:
            return Object.assign({}, state, {isLoad:false,productList:[...state.productList, action.payload]})
        case stockAction.addProductErr:
            return Object.assign({}, state, {isLoad:false,isErr:true,errMsg:action.payload})

        case stockAction.GET_PRODUCT_PRO:
            return Object.assign({}, state, {isLoad:true})
        case stockAction.GET_PRODUCT_SUC:
            return Object.assign({}, state, {isLoad:false,productList:action.payload})
        case stockAction.GET_PRODUCT_ERR:
            return Object.assign({}, state, {isLoad:false,isErr:true,errMsg:action.payload})

        case stockAction.DELETE_PRODUCT_PRO:
            return Object.assign({}, state, {isLoad:true})
        case stockAction.DELETE_PRODUCT_SUC:
            return Object.assign({}, state, { isLoad:false, productList: state.productList.filter(ele => ele.key !== action.payload)}) 
        
         
        case stockAction.UPDATE_PRODUCT_PRO:
            return Object.assign({}, state, {isLoad:true})  
        case stockAction.UPDATE_PRODUCT_SUC:
            console.log('call from product succ reducer', action.payload)
          
            state.productList.forEach((ele, index)=>{
                if(ele.key === action.payload.key){
                    state.productList[index] = action.payload
                }
            })
            return state
        case stockAction.UPDATE_PRODUCT_ERR:
            return Object.assign({}, state, {isLoad:false, isErr:true,errMsg:action.payload})  

        case stockAction.ADD_STORE_PRO:
            return Object.assign({}, state, {isLoad:true})  
        case stockAction.ADD_STORE_SUC:
            return Object.assign({}, state, {isLoad:false,storeList:[...state.storeList, action.payload]})

        case stockAction.GET_STOTE_PRO:
            return Object.assign({}, state, {isLoad:true,})  
        case stockAction.GET_STOTE_SUC:
            return Object.assign({}, state, {isLoad:false,storeList:action.payload})

        case stockAction.DELETE_STORE:
            return Object.assign({}, state, { isLoad:false, storeList: state.storeList.filter(ele => ele.key !== action.payload)})


        case stockAction.ADD_PURCHASE_PRO:
            return Object.assign({}, state, {isLoad:true})  
        case stockAction.ADD_PURCHASE_SUC:
            return Object.assign({}, state, {isLoad:false,purchaseList:[...state.purchaseList, action.payload]})

        case stockAction.ADD_SALES_PRO:
            return Object.assign({}, state, {isLoad:true})  
        case stockAction.ADD_SALES_SUC:
            return Object.assign({}, state, {isLoad:false,salesList:[...state.salesList, action.payload]})

        case stockAction.GET_SALES_PRO:
            return Object.assign({}, state, {isLoad:true,})  
        case stockAction.GET_SALES_SUC:
            return Object.assign({}, state, {isLoad:false,salesList:action.payload})
            
        case stockAction.ADD_STOCK_PRO:
            return Object.assign({}, state, {isLoad:true})  
        case stockAction.ADD_STOCK_SUC:
            return Object.assign({}, state, {isLoad:false,stock:[...state.stock, action.payload]})

        case stockAction.GET_STOCK_PRO:
            return Object.assign({}, state, {isLoad:true,})  
        case stockAction.GET_STOCK_SUC:
            return Object.assign({}, state, {isLoad:false,stock:action.payload})
        
            
          

        default:
            return state
    }
}