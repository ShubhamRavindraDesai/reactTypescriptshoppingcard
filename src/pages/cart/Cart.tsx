import React, { useEffect } from "react";
import { Wrapper } from "../shop/Cart.styles";
import { Grid } from "@mui/material";
import CartItem from "../../componants/cartItem/CartItem";
import {useDispatch, useSelector} from 'react-redux'
import {productActions} from '../../store/store'
import { getShopProducts } from "../../controllers/prodController";
 

const Cart: React.FC<{}> = () => {
  const dispatch = useDispatch()
  const cartProducts = useSelector((state: ProdData) => state.cartItems)
  console.log(cartProducts, 'boom')
  useEffect(() => {
    getShopProducts(`${process.env.REACT_APP_PATHURL}`)
      .then((resData) => {
        const cartArr = resData.filter((el: ProductType) => el.inCart === true);
        dispatch(productActions.getAllCartData(cartArr));
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {cartProducts?.map((el) => (
          <Grid item key={Math.random().toString()} xs={12} sm={4}>
            <CartItem item={el} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
export default Cart;
