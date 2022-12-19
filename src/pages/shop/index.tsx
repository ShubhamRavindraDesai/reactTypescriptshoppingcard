import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Product from "../../containers/product";
import { useDispatch, useSelector } from "react-redux";
// import { productActions } from "../../store/reducers/productReducer";
// import { getShopProducts } from "../../controllers/prodController";
import { useErrorHandler } from "react-error-boundary";
import { prodcutsSagaActions } from "../../sagas/products/sagaActions";


const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: GlobalState) => state.product.items);
  const handleError = useErrorHandler();

  useEffect(() => {
    const testUrl =
    "https://gravatar.com/avatar/78ba6075a31a2b00f2f73dc02eb2ed38?s=400&d=robohash&r=x";
    (async (url: string) => {
      try {
        const res = await fetch(url);
        console.log({res}, url, "Hereee");
        return res?.status;
      } catch (error) {
        console.error(error);
      }
    })(testUrl);
  }, []);
  useEffect(() => {
    dispatch({ type: prodcutsSagaActions.FETCH_PRODUCT });
  }, [dispatch, handleError]);

  return (
    <>
      <Grid container spacing={12}>
        {products?.map((el: any) => (
          <Grid item key={el._id} xs={2} sm={4} md={4}>
            <Product item={el} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Shop;
