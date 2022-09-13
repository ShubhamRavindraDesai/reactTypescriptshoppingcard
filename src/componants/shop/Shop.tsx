import React, { useState } from "react";
import { Wrapper } from "../shop/Cart.styles";
import { Grid } from "@mui/material";
import Product from "../product/Product";

const Shop: React.FC<{
  items: ProductType[];
  cartItems: ProductType[];
  wishItems: ProductType[];
}> = ({ items, cartItems, wishItems }) => {
  const [cardsArr, setCardsArr] = useState(items);
  const [cartProducts, setcartProducts] = useState(cartItems);
  const [wishProducts, setWishProducts] = useState(wishItems);

  const changeItems = (e: React.MouseEvent) => {
    e.preventDefault();
    setCardsArr((prevItems) => {
      console.log(e.currentTarget.id)
      return prevItems.filter((el) => el.id != e.currentTarget.id);
    });
  };

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
      const arr = prevData?.map((el) => el);
      const obj = [...arr, data];
      localStorage.setItem("WishProducts", JSON.stringify(obj));
      return obj;
    });
  };

  return (
    <Wrapper>
      <Grid container spacing={3} >
        {cardsArr?.map((el) => (
          <Grid item key={el.id} xs={12} sm={4} >
            <Product
              item={el}
              productHandler={changeItems}
              cartHandler={cartDataHandle}
              wishHandler={wishHandle}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Shop;
