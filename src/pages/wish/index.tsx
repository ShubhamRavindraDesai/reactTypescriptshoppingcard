import React, {useEffect } from "react";
import { Wrapper } from "../shop/index.styles";
import { Grid } from "@mui/material";
import WishItem from "../../containers/wishItem";
import { useDispatch, useSelector } from "react-redux";
// import {productActions} from '../../store/reducers/productReducer'
// import { getShopProducts } from "../../controllers/prodController";
import { prodcutsSagaActions } from "../../sagas/products/sagaActions";
const Wish: React.FC<{}> = () => {
  const dispatch = useDispatch()
  const wishProducts = useSelector((state: GlobalState) => state.product.wishItems)
  useEffect(() => {
    dispatch({ type: prodcutsSagaActions.FETCH_PRODUCT })
    // getShopProducts(`${process.env.REACT_APP_PATHURL}`)
    //   .then((resData) => {
    //     const wishArr = resData.filter((el: ProductType) => el.inWish === true);
    //     dispatch(productActions.getAllWishData(wishArr));
    //   })
    //   .catch((err) => {
    //     throw err;
    //   });
  }, [dispatch]);

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {wishProducts?.map((el) => (
          <Grid item key={el._id} xs={12} sm={4}>
            <WishItem
              item={el}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
export default Wish;
