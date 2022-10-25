import { call, put, takeEvery  } from "redux-saga/effects";
import { createProduct } from "../../controllers/prodController";
import { productActions } from "../../reducers/productReducer";

 import { CREATE_PRODUCT } from "./sagaActions";



function* productsSagaWorker(action: any){
   try{
    console.log(action)
    const { data } = yield call(createProduct, action.payload)
    console.log(data)

      yield put(productActions.getnewData(data.product))
   }catch(err) {
    console.log(err)
   }
     
}




export function* productsSagaWatcher2(){
     
yield takeEvery(CREATE_PRODUCT ,productsSagaWorker)
}