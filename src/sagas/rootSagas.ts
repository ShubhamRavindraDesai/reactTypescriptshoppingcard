import {  spawn } from "redux-saga/effects";
import { productsSagaWatcher } from "./products";
import {productsSagaWatcher2} from './products/addProductsaga'


export function* rootSaga (){
  yield  spawn(productsSagaWatcher )
  yield  spawn(productsSagaWatcher2 )
}