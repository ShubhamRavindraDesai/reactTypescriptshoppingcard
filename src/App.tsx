import React, { useState, useEffect, useReducer } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./componants/header/Header";
import Shop from "./componants/shop/Shop";
import Cart from "./componants/cart/Cart";
import Wish from "./componants/wish/Wish";
import AddNewProduct from "./componants/addNewProduct/AddNewProduct";
import Product from "./componants/product/Product";

// import NewProduct from "./componants/addProduct/NewProduct";

const App = () => {
  const [addedProducts, setAddedProducts] = useState<ProdAddNew[]>([]);
  const [products, setProducts] = useState<ProductType[]>();
  const [cartData, setCartData] = useState<ProductType[]>([]);
  const [wishData, setWishdata] = useState<ProductType[]>([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/v1/products").then((resData) => {
      setProducts(resData.data);
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

  const prodAdd = (data: ProdAddNew) => {
    setAddedProducts((prevProd) => {
      const arr = [...prevProd, data];
      return arr;
    });
  };

  return (
    <div>
      <Header />
      <Route path="/" exact >
        {products && 
          <Shop items={products} cartItems={cartData} wishItems={wishData} />
        }
      </Route>
      <Route path="/cart" exact >
        <Cart cartItems={cartData} />
      </Route>
      <Route path="/wishList"  exact>
        <Wish items={wishData} />
      </Route>
      <Route path="/addNewProduct"  exact>
        <AddNewProduct productHandler={prodAdd} />
      </Route>
      <Route path='/:id'>
      {/* <Product/> */}
      </Route>
    </div>
  );
};

export default App;
