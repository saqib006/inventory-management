

export default class stockAction{

    static ADD_PRODUCT_PRO = 'ADD_PRODUCT_PRO';
    static ADD_PRODUCT_SUC = 'ADD_PRODUCT_SUC';
    static ADD_PRODUCT_ERR = 'ADD_PRODUCT_ERR';

    static GET_PRODUCT_PRO = 'GET_PRODUCT_PRO';
    static GET_PRODUCT_SUC = 'GET_PRODUCT_SUC';
    static GET_PRODUCT_ERR = 'GET_PRODUCT_ERR';

    static DELETE_PRODUCT_PRO = 'DELETE_PRODUCT_PRO';
    static DELETE_PRODUCT_SUC = 'DELETE_PRODUCT_SUC';

    static UPDATE_PRODUCT_PRO = 'UPDATE_PRODUCT_PRO';
    static UPDATE_PRODUCT_SUC = 'UPDATE_PRODUCT_SUC';
    static UPDATE_PRODUCT_ERR = 'UPDATE_PRODUCT_ERR';

    static ADD_STORE_PRO = 'ADD_STORE_PRO';
    static ADD_STORE_SUC = 'ADD_STORE_SUC';

    static GET_STOTE_PRO = 'GET_STOTE_PRO';
    static GET_STOTE_SUC = 'GET_STOTE_SUC';

    static ADD_PURCHASE_PRO = 'ADD_PURCHASE_PRO';
    static ADD_PURCHASE_SUC = 'ADD_PURCHASE_SUC';

    static ADD_SALES_PRO = 'ADD_SALES_PRO';
    static ADD_SALES_SUC = 'ADD_SALES_SUC';

    static DELETE_STORE = 'DELETE_STORE';

    static ADD_STOCK_PRO = 'STOCK_PRO';
    static ADD_STOCK_SUC = 'STOCK_SUC';

    static GET_STOCK_PRO = 'GET_STOCK_PRO';
    static GET_STOCK_SUC = 'GET_STOCK_SUC';

    static GET_SALES_PRO = 'GET_SALES_PRO';
    static GET_SALES_SUC = 'GET_SALES_SUC';

 

    static addProduct(productDetail){
        
        return{
            type:stockAction.ADD_PRODUCT_PRO,
            payload:productDetail
        }
    }

    

    static addProductErr(message){
        return{
            type:stockAction.ADD_PRODUCT_ERR,
            payload:message
        }
    }

    static getProduct(){
        return{
            type:stockAction.GET_PRODUCT_PRO
        }
    }

    static getProductErr(message){
        return{
            type:stockAction.GET_PRODUCT_ERR,
            payload:message
        }
    }

    static deleteProduct(key){
        return{
            type:stockAction.DELETE_PRODUCT_PRO,
            payload: key
        }
    }

   

    static updateProduct(updateInfo){
        return{
            type: stockAction.UPDATE_PRODUCT_PRO,
            payload:updateInfo
        }
    }


    static updateProductErr(message){
        return{
            type: stockAction.UPDATE_PRODUCT_ERR,
            payload:message
        }
    }

    static addStore(storeDetail){
        return{
            type:stockAction.ADD_STORE_PRO,
            payload:storeDetail
        }
    }

   

    static addPurchase(purchaseDetail){
        return{
            type:stockAction.ADD_PURCHASE_PRO,
            payload:purchaseDetail
        }
    }


    

    static addSales(saleInfo){
        return{
            type:stockAction.ADD_SALES_PRO,
            payload:saleInfo
        }
    }

    
    

    static getStore(){
        return{
            type:stockAction.GET_STOTE_PRO,
        }
    }

   

    static deleteStore(key){
        return{
            type:stockAction.DELETE_STORE,
            payload:key
        }
    }

    static addStock(stockDetail){
        return{
            type:stockAction.ADD_STOCK_PRO,
            payload:stockDetail
        }
    }

    

    static getStock(){
        return{
            type:stockAction.GET_STOCK_PRO
        }
    }

    static getSales(){
        return{
            type:stockAction.GET_SALES_PRO
        }
    }

    static getStockSuc(payload){
        return{
            type:stockAction.GET_STOCK_SUC,
            payload:payload
        }
    }
}