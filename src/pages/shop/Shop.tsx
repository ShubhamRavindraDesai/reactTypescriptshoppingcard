import React, { useEffect } from "react";
import { Wrapper } from "./Cart.styles";
import { Grid } from "@mui/material";
import Product from "../../componants/product/Product";
import {useDispatch, useSelector} from 'react-redux'
import {productActions} from '../../store/store'
import { getShopProducts } from "../../controllers/prodController";
import { useErrorHandler } from "react-error-boundary";
 
interface Iprops {}

const Shop = (props: Iprops) => {
  const dispatch = useDispatch()
  const products = useSelector((state: ProdData) => state.items)
  const handleError = useErrorHandler();


  useEffect(() => {
    getShopProducts(`${process.env.REACT_APP_PATHURL}`)
      .then((resData) => {
        dispatch(productActions.getAllData(resData));
        const cartArr = resData.filter((el: ProductType) => el.inCart === true);
        dispatch(productActions.getAllCartData(cartArr));
        const wishArr = resData.filter((el: ProductType) => el.inWish === true);
        dispatch(productActions.getAllWishData(wishArr));
      })
      .catch((err) => {
        handleError(err);
        throw err;
      });
  }, [dispatch,handleError]);


  return (
    <Wrapper>
      <Grid container spacing={3} >
        {products?.map((el) => (
          <Grid item key={el._id} xs={12} sm={4} >
            <Product
              item={el}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Shop;
