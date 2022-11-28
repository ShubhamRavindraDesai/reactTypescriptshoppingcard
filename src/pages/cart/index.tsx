import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import CartItem from "../../containers/cartItem";
import { useDispatch, useSelector } from "react-redux";
import { prodcutsSagaActions } from "../../sagas/products/sagaActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: GlobalState) => state.product.cartItems  );

  useEffect(() => {
    dispatch({ type: prodcutsSagaActions.FETCH_PRODUCT });
  }, [dispatch]);
  return (
    <>
      <Grid container spacing={3}>
        {cartProducts?.map((el) => (
          <Grid item key={Math.random().toString()} xs={12} sm={4}>
            <CartItem item={el} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Cart;
