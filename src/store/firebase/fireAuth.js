import firebase from './config';


export function signInFromFirebase(payload){
    return firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass);
}

export function signOut () { 
    return firebase.auth().signOut();
}

export function checkUser(){
    return new Promise((res,rej)=>{
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                res(user)
            }
            else{
                res(null)
            }
        })
    });
}