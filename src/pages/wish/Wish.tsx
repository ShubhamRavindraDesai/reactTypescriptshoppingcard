import React, {useEffect } from "react";
import { Wrapper } from "../shop/Cart.styles";
import { Grid } from "@mui/material";
import WishItem from "../../componants/wishItem/WishItem";
import {useDispatch, useSelector} from 'react-redux'
import {productActions} from '../../store/store'
import { getShopProducts } from "../../controllers/prodController";
const Wish: React.FC<{}> = () => {
  const dispatch = useDispatch()
  const wishProducts = useSelector((state: ProdData) => state.wishItems)
  useEffect(() => {
    getShopProducts(`${process.env.REACT_APP_PATHURL}`)
      .then((resData) => {
        const wishArr = resData.filter((el: ProductType) => el.inWish === true);
        dispatch(productActions.getAllWishData(wishArr));
      })
      .catch((err) => {
        throw err;
      });
  }, []);

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
