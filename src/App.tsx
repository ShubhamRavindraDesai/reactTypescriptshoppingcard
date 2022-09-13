import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import ResponsiveAppBar from "./componants/header/Header";
import Shop from "./componants/shop/Shop";
import Cart from "./componants/cart/Cart";
import Wish from "./componants/wish/Wish";
import AddNewProduct from "./componants/addNewProduct/AddNewProduct";
import { Wrapper } from "./App.styles";
import ProductDetailPage from "./pages/ProductDetailPage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const [addedProducts, setAddedProducts] = useState<ProdAddNew[]>([]);
  const [products, setProducts] = useState<ProductType[]>();
  const [cartData, setCartData] = useState<ProductType[]>([]);
  const [wishData, setWishdata] = useState<ProductType[]>([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((resData) => {
      setProducts(resData.data.products);
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
    <Wrapper>
      <ResponsiveAppBar />
      <Routes>
        <Route
          path="/"
          element={
            products && (
              <Shop
                items={products}
                cartItems={cartData}
                wishItems={wishData}
              />
            )
          }
        />
        <Route
          path="/Cart"
          element={<Cart cartItems={cartData} wishItems={wishData} />}
        />
        <Route
          path="/WishList"
          element={<Wish items={wishData} cartItems={cartData} />}
        />
        <Route
          path="/Admin"
          element={<AddNewProduct productHandler={prodAdd} />}
        />
        <Route
           path="/Shop/:id"
          element={<ProductDetailPage/>}
        />
        <Route
           path="*"
          element={<PageNotFound/>}
        />
      </Routes>
    </Wrapper>
  );
};

export default App;
