import React, { useState } from "react";
import { Wrapper } from "./Item.styles";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import CustomButton from "../button/Button";
import { useNavigate, useLocation } from "react-router-dom";

const Product: React.FC<{
  item: ProductType;
  cartHandler: (data: ProductType) => void;
  wishHandler: (data: ProductType) => void;
  productHandler: (e: React.MouseEvent) => void;
}> = ({ item,cartHandler, productHandler, wishHandler }) => {
  const [itemInWishlist, setItemInWishlist] = useState(false);
  const [itemInCart, setItemInCart] = useState(false);
  const navigate = useNavigate();
  

  return (
    <Wrapper>
      <div onClick={() => navigate(`/shop/${item.id}`)}>
      <img src={item.images[0]} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <IconButton aria-label="delete" id={`${item.id}`} onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
            productHandler(e);
          }}>
        <DeleteIcon        />
      </IconButton>
      {itemInWishlist ? (
        <CustomButton>Added to wishlist</CustomButton>
      ) : (
        <CustomButton
          onClick={() => {
            wishHandler(item);
            setItemInWishlist(true);
          }}
        >
          Add to wishlist
        </CustomButton>
      )}
      {itemInCart ? (
        <CustomButton> Added to Cart</CustomButton>
      ) : (
        <CustomButton
          onClick={() => {
            cartHandler(item);
            setItemInCart(true);
          }}
        >
          Add to Cart
        </CustomButton>
      )}
    </Wrapper>
  );
};

export default Product;
