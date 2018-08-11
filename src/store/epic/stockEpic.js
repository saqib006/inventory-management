import {Observable} from 'rxjs';
import stockAction from '../action/stockAction';
import { addProduct, getProduct, DeleteProduct, updateProduct, getStore, addStore, addPurchase, addSale, getStock, getSales } from '../firebase/db';




export class stockEpic{

   static addProductOnFirebase(action$){
      
        return action$.ofType(stockAction.ADD_PRODUCT_PRO).switchMap(({payload})=>{
            return Observable.fromPromise(addProduct(payload)).map((obj)=>{
                return{
                    type:stockAction.ADD_PRODUCT_SUC,
                    payload:obj
                }
            })
        }).catch((error)=>{
            return Observable.of(stockAction.addProductErr(error.message))
        })
    }


    static addPurchaseOnFirebase(action$){
      
        return action$.ofType(stockAction.ADD_PURCHASE_PRO).switchMap(({payload})=>{
            return Observable.fromPromise(addPurchase(payload)).map((obj)=>{
                return{
                    type:stockAction.ADD_PURCHASE_SUC,
                    payload:obj
                }
            })
        })
    }

    

    static addSaleOnFirebase(action$){
      
        return action$.ofType(stockAction.ADD_SALES_PRO).switchMap(({payload})=>{
            return Observable.fromPromise(addSale(payload)).map((obj)=>{
                return{
                    type:stockAction.ADD_SALES_SUC,
                    payload:obj
                }
            })
        })
    }

  static getDataFromFirebase(action$){
    return action$.ofType(stockAction.GET_PRODUCT_PRO).switchMap(({payload})=>{
        return Observable.fromPromise(getProduct()).map((array)=>{
            return{
                type:stockAction.GET_PRODUCT_SUC,
                payload:array
            }
        }).catch((error)=>{
            return Observable.of(stockAction.getProductErr(error.message))
        })
    })
  }

  static deleteProductOnFirebase(action$){
    return action$.ofType(stockAction.DELETE_PRODUCT_PRO).switchMap(({payload})=>{
        return Observable.fromPromise(DeleteProduct(payload)).map((payload)=>{
            return{
                type:stockAction.DELETE_PRODUCT_SUC,
                payload:payload
                
            }
            
        })
        
    })
  }


  static updateProductOnFirebase(action$){
    
        return action$.ofType(stockAction.UPDATE_PRODUCT_PRO).switchMap(({payload})=>{
            return Observable.fromPromise(updateProduct(payload)).map((payload)=>{
                return{
                    type:stockAction.UPDATE_PRODUCT_SUC,
                    payload:payload
                }
            })
        }).catch(error=>{
            return Observable.of(stockAction.updateProductErr(error.message))
        })
  }



  static addStoreOnFirebase(action$){
      
    return action$.ofType(stockAction.ADD_STORE_PRO).switchMap(({payload})=>{

        return Observable.fromPromise(addStore(payload)).map((obj)=>{
            return{
                type:stockAction.ADD_STORE_SUC,
                payload:obj
            }
        })
    })
}


static getStoreFromFirebase(action$){
    return action$.ofType(stockAction.GET_STOTE_PRO).switchMap(({payload})=>{
        return Observable.fromPromise(getStore()).map((array)=>{
            return{
                type:stockAction.GET_STOTE_SUC,
                payload:array
            }
        })
    })
  }

  static getStockFromFirebase(action$){
    return action$.ofType(stockAction.GET_STOCK_PRO).switchMap(({payload})=>{
        return Observable.fromPromise(getStock()).map((array)=>{
            return{
                type:stockAction.GET_STOCK_SUC,
                payload:array
            }
        })
    })
  }

  static getSalesFromFirebase(action$){
    return action$.ofType(stockAction.GET_SALES_PRO).switchMap(({payload})=>{
        return Observable.fromPromise(getSales()).map((array)=>{
            return{
                type:stockAction.GET_SALES_SUC,
                payload:array
            }
        })
    })
  }
   

}

