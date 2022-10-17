import { call, takeEvery, put } from "redux-saga/effects";
import { getShopProducts } from "../../../controllers/prodController";
import { productActions } from "../../reducers/productReducer";

 import { prodcutsSagaActions } from "./sagaActions";



function* productsSagaWorker(): any{
     const res = yield call(getShopProducts)
     const newarr = res.filter((el: ProductType) => el.inCart === true)
     const wishArr = res.filter((el: ProductType) => el.inWish === true);
     yield put(productActions.getAllWishData(wishArr))
     yield put (productActions.getAllCartData(newarr))
      yield put(productActions.getAllData(res))
}




export function* productsSagaWatcher(){
     
yield takeEvery(prodcutsSagaActions.FETCH_PRODUCT,productsSagaWorker)
}