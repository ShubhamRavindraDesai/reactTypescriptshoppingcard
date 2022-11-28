import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas/rootSagas";

import productReducer from "../reducers/productReducer";
import userReducer from "../reducers/userReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { product: productReducer, user: userReducer },
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;