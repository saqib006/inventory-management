import {Observable} from 'rxjs';
import {signInFromFirebase, signOut,checkUser} from '../firebase/fireAuth';
import authAction from '../action/authAction';

export class authEpic{
    static signInFromFirebase(action$){
        return action$.ofType(authAction.SIGNIN_P).switchMap(({payload})=>{
            return Observable.fromPromise(signInFromFirebase(payload)).map((obj)=>{
                return {
                    type:authAction.SIGNIN_S,
                    payload:obj.user
                }
            }).catch((err)=>{
                return Observable.of(authAction.signInE(err.msg))
            })
        });
    }

    static signOutFromFirebase(action$){
        console.log('signout')
        return action$.ofType(authAction.SIGNOUT_P).switchMap(({payload})=>{
            return Observable.fromPromise(signOut()).map(()=>{
                return{
                    type: authAction.SIGNOUT_S,
                    payload: null
                }
            }).catch((err)=>{
                return Observable.of(authAction.signOutE(err.msg))
            })
        })
    }

    static checkUserFromFirebase(action$){
        return action$.ofType(authAction.CHECKUSER_P).switchMap(({payload})=>{
            return Observable.fromPromise(checkUser()).map((user)=>{
                return{
                    type:authAction.CHECKUSER_S,
                    payload:user
                }
            })
        })
    }
}