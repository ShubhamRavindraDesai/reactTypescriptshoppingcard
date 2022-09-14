import React, { useState, useEffect } from "react";
import axios from "axios";

interface ContextTypes {
  products: ProductType[] | undefined;
  cartProducts: ProductType[];
  wishProducts: ProductType[];
  productHandler: (e: React.MouseEvent) => void;
  cartDataHandler: (data: ProductType) => void;
  wishHandler: (data: ProductType) => void;
  cartProductHandler: (data: ProductType) => void;
  wishProductHandler: (data: ProductType) => void;
  productFromHandler: (data: ProdAddNew) => void;
}

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

export const ProductContextProvider: React.FC<{ children: JSX.Element }> = (
  props
) => {
  const [items, setitems] = useState<ProductType[]>();
  const [cartData, setCartData] = useState<ProductType[]>([]);
  const [wishData, setWishdata] = useState<ProductType[]>([]);
  const [addedProducts, setAddedProducts] = useState<ProdAddNew[]>([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((resData) => {
      setitems(resData.data.products);
    });
    const cartdataObj: string = localStorage.getItem("products")!;

    if (cartdataObj) {
      setCartData(JSON.parse(localStorage.getItem("products")!));
    } else {
      setCartData([]);
    }
    const wishdataObj: string = localStorage.getItem("WishProducts")!;

    if (wishdataObj) {
      setWishdata(JSON.parse(localStorage.getItem("WishProducts")!));
    } else {
      setWishdata([]);
    }
  }, []);

  const changeItems = (e: React.MouseEvent) => {
    e.preventDefault();
    setitems((prevItems) => {
      console.log(e.currentTarget.id);
      const arr = prevItems?.filter((el) => el.id != e.currentTarget.id);
      console.log(arr);
      return arr;
    });
  };

  const cartDataHandle = (data: ProductType) => {
    setCartData((prevData) => {
      const arr = prevData?.filter((el) => el !== data);
      const obj = [...arr];
      localStorage.setItem("products", JSON.stringify(obj));
      return obj;
    });
  };
  const wishHandle = (data: ProductType) => {
    setWishdata((prevData) => {
      const arr = prevData?.filter((el) => el !== data);
      const obj = [...arr];
      localStorage.setItem("WishProducts", JSON.stringify(obj));
      return obj;
    });
  };

  const cartProductHandle = (data: ProductType) => {
    setCartData((prevData) => {
      const arr = prevData?.map((el) => el);
      const obj = [...arr, data];
      localStorage.setItem("products", JSON.stringify(obj));
      return obj;
    });
  };
  const wishProductHandle = (data: ProductType) => {
    setWishdata((prevData) => {
      const arr = prevData?.map((el) => el);
      const obj = [...arr, data];
      localStorage.setItem("WishProducts", JSON.stringify(obj));
      return obj;
    });
  };
  const prodAdd = (data: ProdAddNew) => {
    setAddedProducts((prevProd) => {
      const arr = [...prevProd, data];
      return arr;
    });
  };

  return (
    <ProdContext.Provider
      value={{
        products: items,
        cartProducts: cartData,
        wishProducts: wishData,
        productHandler: changeItems,
        cartDataHandler: cartDataHandle,
        wishHandler: wishHandle,
        cartProductHandler: cartProductHandle,
        wishProductHandler: wishProductHandle,
        productFromHandler: prodAdd,
      }}
    >
      {props.children}
    </ProdContext.Provider>
  );
};

export default ProdContext;
