import firebase from './config';
var fire = firebase.database().ref("/");




export function addProduct(payload) {
  return new Promise((res, rej) => {
    fire
      .child("products")
      .child(payload.key)
      .set(
        {
          key:payload.key,
          name: payload.name,
          manufacturer: payload.manufacturer,
          description:payload.description
        },
        () => {
          res({
                key: payload.key,
                name: payload.name,
                manufacturer: payload.manufacturer,
                description:payload.description
          });
        });
  })
}


export function addStore(payload) {
  return new Promise((res, rej) => {
    fire
      .child("store")
      .child(payload.key)
      .set(
        {
          key:payload.key,
          name: payload.name,
          location: payload.location,
         
        },
        () => {
          res({
            key: payload.key,
            name: payload.name,
            location: payload.location,
          });
        });
  })
}

export function addPurchase(payload) {
  return new Promise((res, rej) => {
    fire
      .child("purchase")
      .child(payload.key)
      .set(
        {
          key:payload.key,
          storeKey:payload.storeKey,
          productKey:payload.productKey,
          storeName: payload.storeName,
          productName: payload.productName,
          date:payload.date,
          quantity:payload.quantity,
          price:payload.price
         
        },
        () => {
          res({
            key: payload.key,
            storeKey:payload.storeKey,
            productKey:payload.productKey,
            storeName:   payload.storeName,
            productName: payload.productName,
            date:        payload.date,
            quantity:     payload.quantity,
            price:       payload.price
          });
        }).then(()=>{
          
          fire.child("stock").orderByChild("productName").equalTo(payload.productName).once("value",snapshot => {
   
            if (snapshot.exists()){

              stockUpdate(payload)
            //  const userData = snapshot.val();
           // var array = objToArray(snapshot)
             // console.log("exists!", array[0].productName);
            //  console.log("exists!", snapshot.key);
      
             
      
              
            }
            else{
              addStockOnFirebase(payload)
            }
        });

          
          
        })
  })
}

export function addStockOnFirebase(payload){
    return new Promise((res, rej)=>{

     fire.child('stock').child(payload.productName).set({
      key:payload.key,
      productName:payload.productName,
      storeName:payload.storeName,
      quantity:payload.quantity

     }, ()=>{
          res({
            key: payload.key,
            productName:payload.productName,
            storeName:payload.storeName,
            quantity:payload.quantity
          })
     });

     
     
    })
}


export function addSale(payload) {
  return new Promise((res, rej) => {
    
    fire
      .child("sale")
      .child(payload.key)
      .set(
        {
          key:payload.key,
          storeKey:payload.storeKey,
          productKey:payload.productKey,
          storeName: payload.storeName,
          productName: payload.productName,
          date:payload.date,
          quantity:payload.quantity,
          price:payload.price
         
        },
        () => {
          res({
            key:payload.key,
            storeName:   payload.storeName,
            productName: payload.productName,
            date:        payload.date,
            quantity:     payload.quantity,
            price:       payload.price
          })
        }).then(()=>{
          
          

          stockUpdate(payload)
          
        })
          
        
       
  })
}





export function getStore(){
  return new Promise((res,rej)=>{
    fire.child('store').once("value", (snapshot)=>{
      res(objToArray(snapshot))
    })
  })
}

export function getSales(){
  return new Promise((res,rej)=>{
    fire.child('sale').once("value", (snapshot)=>{
      res(objToArray(snapshot))
    })
  })
}

export function getStock () { 
  return new Promise((res,rej)=>{
    fire.child('stock').once("value", (snapshot)=>{
      res(objToArray(snapshot))
      console.log('stock list', objToArray(snapshot))
    }
    )
  })
 }


 

export function DeleteProduct(payload){
    
       
        return new Promise ((res,rej)=>{
          fire.child('products').child(payload).remove()
          res(payload)
        })
      
      
    
}


export function updateProduct(payload){

    return new Promise((res, rej)=>{

      let productInfo = {
        name: payload.name,
          manufacturer: payload.manufacturer,
          description:payload.description
      }

      fire.child('products').child(payload.key).update(productInfo);
        res({
          key: payload.key,
          name: payload.name,
          manufacturer: payload.manufacturer,
          description:payload.description
         });
    
    })
      
}


export function getProduct(){
  return new Promise((res,rej)=>{
    fire.child('products').once("value", (snapshot)=>{
      res(objToArray(snapshot))
      console.log('from firebase',objToArray(snapshot))
    })
  })
}

function objToArray(snapshot){
  var array = []
  snapshot.forEach(snap => {
    var value = snap.val();
    value.key = snap.key;

    array.push(value)

  })
  return array;
}

function firedata(){
  
    /*return fire.child('stock').once("value", (snapshot)=>{
      var res = objToArray(snapshot)
      console.log('from firebase',res)
    });*/

    fire.child("stock").orderByChild("productName").equalTo("samsung note 3").once("value",snapshot => {
   
      if (snapshot.exists()){
      //  const userData = snapshot.val();
      var array = objToArray(snapshot)
        console.log("exists!", array[0].productName);
        console.log("exists!", snapshot.key);

       

        
      }
  });
  
}


firedata()

/*fire.child('stock').child("samsung note 3").once("value", (snapshot)=>{
 var obj = objToArray2(snapshot)
  console.log('stock list check', obj[1])
});
*/
function objToArray2(snapshot){
  var array = []
  snapshot.forEach(snap => {
    var value = snap.val();
    //value.key = snap.key;

    array.push(value)

  })
  return array;
}


export function stockUpdate(payload){
 
    
   var quantity;

    fire.child('stock').child(payload.productName).once("value", (snapshot)=>{
      var obj = objToArray2(snapshot)
       console.log('stock list check',quantity = obj[1])
     }).then(()=>{
       if(payload.type === "sale"){
        var updatedValue = quantity  -  payload.quantity
       }
       else if(payload.type === "purchase"){
        var updatedValue = quantity  +  payload.quantity
       }

      
     
      var obj2 = {
       quantity:updatedValue
      }
     console.log('updated obj', payload.quantity)
     fire.child('stock').child(payload.productName).update(obj2);

     });


    

  
  
  

  
}
