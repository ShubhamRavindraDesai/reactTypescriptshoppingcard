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

// import {  getDefaultMiddleware } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import { rootSaga } from "./sagas/rootSagas";

// import productReducer from "./reducers/productReducer";
// import userReducer from "./reducers/userReducer";
// import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

// const listenerMiddleware = createListenerMiddleware();

// const sagaMiddleware = createSagaMiddleware();

// listenerMiddleware.startListening({
//   actionCreator: getAllData,
//   effect: async (action, listenerApi) => {
//     console.log(listenerApi.getOriginalState());
//     console.log(action);
//     await listenerApi.delay(5000);
//     console.log(listenerApi.getState());
//   },
// });

// const store = configureStore({
//   reducer: { product: productReducer, user: userReducer },
//   // middleware: [...getDefaultMiddleware(), sagaMiddleware],
//   middleware: (getDefaultMiddleWare) => {
//     return getDefaultMiddleWare({ thunk: false }).prepend(listenerMiddleware);
//   }
// });

// sagaMiddleware.run(rootSaga);

// export default store;
