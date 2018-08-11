import authAction from '../action/authAction';

const INITIAL_STATE = {
    user: null,
    isLoad: false,
    isErr: false,
    errMsg: ''
}


export default function authReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case authAction.SIGNIN_P:
            return Object.assign({}, state, {isLoad:true})
        case authAction.SIGNIN_S:
            return Object.assign({}, state,{user:action.payload, isLoad:false})
        case authAction.SIGNIN_E:
            return Object.assign({}, state, {isLoad:false,isErr:true, errMsg:action.payload})

        case authAction.SIGNOUT_P:
            return Object.assign({}, state, {isLoad:true})
        case authAction.SIGNOUT_S:
            return Object.assign({}, state, {isLoad:false,user:action.payload})
        case authAction.SIGNOUT_E:
            return Object.assign({}, state, {isLoad:false,isErr:true, errMsg:action.payload})
            
        case authAction.CHECKUSER_P:
            return Object.assign({}, state, {isLoad:true})
        case authAction.CHECKUSER_S:
            return Object.assign({}, state, {user:action.payload, isLoad:false})

        default:
            return state
    }
}