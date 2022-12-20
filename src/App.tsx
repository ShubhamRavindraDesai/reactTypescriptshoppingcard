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
import User from "./pages/user";
const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/"  element={<ResponsiveAppBar />}>
        <Route index element={<Shop />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/WishList" element={<Wish />} />
        <Route path="/Admin" element={<AddNewProduct />} />
        <Route path="/Shop/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='/user' element={<User/>}/>
        </Route>
      </Routes>
    </Wrapper>
  );
};

export default App;
