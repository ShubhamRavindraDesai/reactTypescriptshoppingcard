import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./componants/header/Header";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Wish from "./pages/wish/Wish";
import AddNewProduct from "./pages/addNewProduct/AddNewProduct";
import { Wrapper } from "./App.styles";
import ProductDetailPage from "./pages/ProductDetailPage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Wrapper>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Shop />} />
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
