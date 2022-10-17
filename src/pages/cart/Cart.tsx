import React, { useEffect } from "react";
import { Wrapper } from "../shop/Cart.styles";
import { Grid } from "@mui/material";
import CartItem from "../../componants/cartItem/CartItem";
import {useDispatch, useSelector} from 'react-redux'
// import {productActions} from '../../store/reducers/productReducer'
// import { getShopProducts } from "../../controllers/prodController";
import { prodcutsSagaActions } from "../../store/sagas/products/sagaActions";
 

const Cart: React.FC<{}> = () => {
  const dispatch = useDispatch()
  const cartProducts = useSelector((state: GlobalState) => state.product.cartItems)
  useEffect(() => {
    dispatch({ type: prodcutsSagaActions.FETCH_PRODUCT })
    // getShopProducts(`${process.env.REACT_APP_PATHURL}`)
    //   .then((resData) => {
    //     const cartArr = resData.filter((el: ProductType) => el.inCart === true);
    //     dispatch(productActions.getAllCartData(cartArr));
    //   })
    //   .catch((err) => {
    //     throw err;
    //   });
  }, [dispatch]);
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
