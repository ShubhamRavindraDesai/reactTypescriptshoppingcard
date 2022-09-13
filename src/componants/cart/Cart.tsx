import React, { useState } from "react";
import { Wrapper } from "../shop/Cart.styles";
import { Grid } from "@mui/material";
import CartItem from "../cartItem/CartItem";
const Cart: React.FC<{
  cartItems: ProductType[];
  wishItems: ProductType[];
}> = ({ cartItems, wishItems }) => {
  const [cartProducts, setcartProducts] = useState(cartItems);
  const [wishProducts, setWishProducts] = useState(wishItems);

  const cartDataHandle = (data: ProductType) => {
    setcartProducts((prevData) => {
      const arr = prevData?.filter((el) => el !== data);
      const obj = [...arr];
      localStorage.setItem("products", JSON.stringify(obj));
      return obj;
    });
  };

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {cartProducts?.map((el) => (
          <Grid item key={Math.random().toString()} xs={12} sm={4}>
            <CartItem item={el} removeFromCartHandler={cartDataHandle} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
export default Cart;
