import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./containers/header";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Wish from "./pages/wish";
import AddNewProduct from "./pages/addNewProduct";
import { Wrapper } from "./App.styles";
import ProductDetailPage from "./pages/productDetails";
import PageNotFound from "./pages/notFoundPage";
import { SignUp } from "./pages/signup";
const App = () => {
  return (
    <Wrapper>
      <ResponsiveAppBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <img width="100%" height="500px" src="/hero.jpg" alt="" />
              <Shop />
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/WishList" element={<Wish />} />
        <Route path="/Admin" element={<AddNewProduct />} />
        <Route path="/Shop/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
