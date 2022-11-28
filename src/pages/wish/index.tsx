import React, {useEffect } from "react";
import { Grid } from "@mui/material";
import WishItem from "../../containers/wishItem";
import { useDispatch, useSelector } from "react-redux";
import { prodcutsSagaActions } from "../../sagas/products/sagaActions";
const Wish: React.FC<{}> = () => {
  const dispatch = useDispatch()
  const wishProducts = useSelector((state: GlobalState) => state.product.wishItems)
  useEffect(() => {
    dispatch({ type: prodcutsSagaActions.FETCH_PRODUCT })
    
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={3}>
        {wishProducts?.map((el) => (
          <Grid item key={el._id} xs={12} sm={4}>
            <WishItem
              item={el}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Wish;
