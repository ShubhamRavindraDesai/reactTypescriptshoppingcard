import React, { useEffect, useState } from "react";
import { Wrapper } from "./index.styles";
import { Grid } from "@mui/material";
import Product from "../../containers/product";
import { useDispatch, useSelector } from "react-redux";
// import { productActions } from "../../store/reducers/productReducer";
// import { getShopProducts } from "../../controllers/prodController";
import { useErrorHandler } from "react-error-boundary";
import { prodcutsSagaActions } from "../../sagas/products/sagaActions";

interface Iprops {}

const Shop = (props: Iprops) => {
  const dispatch = useDispatch();
  const products = useSelector((state: GlobalState) => state.product.items);
  const handleError = useErrorHandler();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<any>();

  useEffect(() => {
    dispatch({ type: prodcutsSagaActions.FETCH_PRODUCT });
  }, [dispatch, handleError]);

  return (
    <Wrapper>
      <Grid container spacing={12}>
        {products?.map((el: any) => (
          <Grid item key={el._id} xs={2} sm={4} md={4}>
            <Product item={el} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Shop;
