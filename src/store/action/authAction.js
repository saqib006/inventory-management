

export default class authAction {
    static SIGNIN_P = 'SIGNIN_P';
    static SIGNIN_S = 'SIGNIN_S';
    static SIGNIN_E = 'SIGNIN_E';

    static SIGNOUT_P = 'SIGNOUT_P';
    static SIGNOUT_S = 'SIGNOUT_S';
    static SIGNOUT_E = 'SIGNOUT_E';

    static CHECKUSER_P = 'CHECKUSER_P';
    static CHECKUSER_S = 'CHECKUSER_S';

   


    static signInP(user){
        return{
            type:authAction.SIGNIN_P,
            payload: user
        }
    }

   /* static signInS(user){
        return{
            type:authAction.SIGNIN_S,
            payload: user
        }
    }*/

    static signInE(msg){
        return{
            type:authAction.SIGNIN_E,
            payload: msg
        }
    }

    static signOutP(){
        console.log('signout')
        return{
            type:authAction.SIGNOUT_P,
            
            
        }
    }

    static signOutS(){
        console.log('signout')
        return{
            
            type:authAction.SIGNOUT_S,
           
        }
    }

    static signOutE(msg){
        return{
            type:authAction.SIGNOUT_E,
            payload: msg
        }
    }

    static checkUser_P(){
        return{
            type:authAction.CHECKUSER_P
        }
    }


    
}