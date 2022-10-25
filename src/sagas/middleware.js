
import { call, takeEvery } from "redux-saga/effects";
import { getShopProducts } from "../controllers/prodController";
import { productActions } from "../reducers/productReducer";

const fetchTodo = (url) => fetch(url).then((res) => res.json());

function* workerSaga(action) {
  const { url } = action.payload;
 
    const todo = yield call(fetchTodo, url)
};

function* watcherSaga() {
  yield takeEvery(fetchTodo.toString(), workerSaga);
};