import {combineReducers, createStore, applyMiddleware} from 'redux';
import { combineEpics, createEpicMiddleware } from "redux-observable";
import authReducer from './reducer/authReducer';
import stockReducer from './reducer/stockReducer';
import {authEpic} from './epic/authEpic';
import {stockEpic} from './epic/stockEpic';
import { loadState, saveState } from "../PersistState";

const persistedState = loadState();

let rootReducer = combineReducers({
    authReducer,
    stockReducer
});

export const rootEpic = combineEpics(

  authEpic.signInFromFirebase,
  authEpic.signOutFromFirebase,
  authEpic.checkUserFromFirebase,
  

  stockEpic.addProductOnFirebase,
  stockEpic.getDataFromFirebase,
  stockEpic.deleteProductOnFirebase,
  stockEpic.updateProductOnFirebase,
  stockEpic.addStoreOnFirebase,
  stockEpic.getStoreFromFirebase,
  stockEpic.addPurchaseOnFirebase,
  stockEpic.addSaleOnFirebase,
  stockEpic.getStockFromFirebase,
  stockEpic.getSalesFromFirebase
  
)

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware);



export let store = createStore(
    rootReducer,
    persistedState,
    createStoreWithMiddleware,
  );

store.subscribe(()=>{
    saveState(store.getState());
})
