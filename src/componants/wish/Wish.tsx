import React, { useState } from "react";
import { Wrapper } from "../shop/Cart.styles";
import { Grid } from "@mui/material";
import WishItem from "../wishItem/WishItem";
const Wish: React.FC<{
  cartItems: ProductType[];
  items: ProductType[];
}> = ({ cartItems, items }) => {
  const [cartProducts, setcartProducts] = useState(cartItems);
  const [wishProducts, setWishProducts] = useState(items);

  const cartDataHandle = (data: ProductType) => {
    setcartProducts((prevData) => {
      const arr = prevData?.map((el) => el);
      const obj = [...arr, data];
      localStorage.setItem("products", JSON.stringify(obj));
      return obj;
    });
  };
  const wishHandle = (data: ProductType) => {
    setWishProducts((prevData) => {
      const arr = prevData?.filter((el) => el !== data);
      const obj = [...arr];
      localStorage.setItem("WishProducts", JSON.stringify(obj));
      return obj;
    });
  };

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {wishProducts?.map((el) => (
          <Grid item key={el.id} xs={12} sm={4}>
            <WishItem
              item={el}
              removeFromWish={wishHandle}
              cartHandler={cartDataHandle}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
export default Wish;
