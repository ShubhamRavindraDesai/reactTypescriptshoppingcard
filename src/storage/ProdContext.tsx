import React, { useEffect, useReducer, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getShopProducts,
  updateProducts,
  deleteShopProducts,
  createProduct,
} from "../controllers/prodController";

// Creating context

const ProdContext = React.createContext<ContextTypes>({
  products: [],
  cartProducts: [],
  wishProducts: [],
  productHandler: () => {},
  cartDataHandler: () => {},
  wishHandler: () => {},
  cartProductHandler: () => {},
  wishProductHandler: () => {},
  productFromHandler: () => {},
});

enum CountActionKind {
  RESDATA = "RESDATA",
  CHANGEDATA = "CHANGEDATA",
}

const reducerFn = (state: Data, action: CountAction) => {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.RESDATA:
      state.items = payload.items;
      return { ...state };
    case CountActionKind.CHANGEDATA:
      state.items = payload.items;
      return {
        ...state,
      };
    default:
      return state;
  }
};

interface Iprops {
  children: JSX.Element;
}

export const ProductContextProvider = (props: Iprops) => {
  const [shopProducts, dispatchFn] = useReducer(reducerFn, { items: [] });
  const [wishData, wishdispatchFn] = useReducer(reducerFn, { items: [] });
  const [cartData, cartdispatchFn] = useReducer(reducerFn, { items: [] });
  const [loading, setLoading] = useState(true);
  const handleError = useErrorHandler();

  useEffect(() => {
    getShopProducts(`${process.env.REACT_APP_PATHURL}`)
      .then((resData) => {
        setLoading(false);
        dispatchFn({
          type: CountActionKind.RESDATA,
          payload: { items: [...resData] },
        });

        const wishArr = resData.filter((el: ProductType) => el.inWish === true);
        wishdispatchFn({
          type: CountActionKind.RESDATA,
          payload: { items: [...wishArr] },
        });

        const cartArr = resData.filter((el: ProductType) => el.inCart === true);

        cartdispatchFn({
          type: CountActionKind.RESDATA,
          payload: { items: [...cartArr] },
        });
      })
      .catch((err) => {
        handleError(err);
        throw err;
      });
  }, [handleError]);

  const changeItems = (product: ProductType) => {
    deleteShopProducts(product).then((status) => {
      const newArr = shopProducts.items.filter((el: ProductType) => {
        return el !== product;
      });
      dispatchFn({
        type: CountActionKind.CHANGEDATA,
        payload: { items: newArr },
      });
    });
  };

  const cartDataHandle = (data: ProductType) => {
    updateProducts(data, { inCart: false }).then(() => {
      const newArr = cartData.items.filter((el: ProductType) => {
        return el !== data;
      });
      cartdispatchFn({
        type: CountActionKind.CHANGEDATA,
        payload: { items: newArr },
      });
    });
  };
  const cartProductAdder = (product: ProductType) => {
    updateProducts(product, { inCart: true }).then(() => {
      const newArr = [...cartData.items, product];
      cartdispatchFn({
        type: CountActionKind.CHANGEDATA,
        payload: { items: newArr },
      });
    });
  };
  const wishHandle = (data: ProductType) => {
    updateProducts(data, { inWish: false }).then(() => {
      const newArr = wishData.items.filter((el: ProductType) => {
        return el !== data;
      });
      wishdispatchFn({
        type: CountActionKind.CHANGEDATA,
        payload: { items: newArr },
      });
    });
  };

  const wishProductAdder = (product: ProductType) => {
    updateProducts(product, { inWish: true }).then(() => {
      const newArr = [...wishData.items, product];
      wishdispatchFn({
        type: CountActionKind.CHANGEDATA,
        payload: { items: newArr },
      });
    });
  };
  const prodAdd = (product: ProdAddNew) => {
    createProduct(product).then((prod) => {
      const newArr = [...shopProducts.items, prod];
      dispatchFn({
        type: CountActionKind.CHANGEDATA,
        payload: { items: newArr },
      });
    });
  };

  return (
    <ProdContext.Provider
      value={{
        products: shopProducts.items,
        cartProducts: cartData.items,
        wishProducts: wishData.items,
        productHandler: changeItems,
        cartDataHandler: cartDataHandle,
        wishHandler: wishHandle,
        cartProductHandler: cartProductAdder,
        wishProductHandler: wishProductAdder,
        productFromHandler: prodAdd,
      }}
    >
      {!loading ? (
        props.children
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
          }}
        >
          <h1>Loading...</h1>
          <CircularProgress />
        </div>
      )}
    </ProdContext.Provider>
  );
};

export default ProdContext;
