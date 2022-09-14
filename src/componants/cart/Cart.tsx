import React, { useState, useContext } from "react";
import { Wrapper } from "../shop/Cart.styles";
import { Grid } from "@mui/material";
import CartItem from "../cartItem/CartItem";
import ProdContext from "../../storage/ProdContext";

const Cart: React.FC<{}> = () => {
  const prodContext = useContext(ProdContext)
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {prodContext.cartProducts?.map((el) => (
          <Grid item key={Math.random().toString()} xs={12} sm={4}>
            <CartItem item={el} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
export default Cart;
