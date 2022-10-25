import React from "react";
import "../wishItem/index.styles.ts";
import { Wrapper } from "../wishItem/index.styles";
import "./index.styles";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../reducers/productReducer";
import { updateProducts } from "../../controllers/prodController";
import { Box, Button, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
interface Iprops {
  item: ProductType;
}
const CartItem = ({ item }: Iprops) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: GlobalState) => state.product.cartItems
  );
  const wishItems = useSelector(
    (state: GlobalState) => state.product.wishItems
  );

  const cartHandler = () => {
    updateProducts(item, { inCart: false }).then(() => {
      const newArr = cartItems.filter((el) => el !== item);
      dispatch(productActions.getAllCartData(newArr));
    });
  };

  const wishHandler = () => {
    updateProducts(item, { inWish: true }).then(() => {
      const newArr = [...wishItems, item];
      dispatch(productActions.getAllWishData(newArr));
    });
  };
  return (
    <Wrapper>
      <Box onClick={() => navigate(`/shop/${item._id}`)}>
        <h3>{item.title}</h3>
        <CardMedia
          component="img"
          sx={{
            height: 200,
            width: 400,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          src={item.images[0]}
        />
        <p>Price: ${item.price}</p>
      </Box>
      {item.inWish ? (
        <Button variant="contained">Added to wishlist</Button>
      ) : (
        <Button onClick={wishHandler} variant="contained">
          Add to wishlist
        </Button>
      )}
      <Button variant="contained" onClick={cartHandler}>
        Remove From Cart
      </Button>
    </Wrapper>
  );
};

export default CartItem;
