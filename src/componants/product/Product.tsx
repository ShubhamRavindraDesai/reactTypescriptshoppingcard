import React, { useState, useContext } from "react";
import { Wrapper } from "./Item.styles";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import CustomButton from "../button/Button";
import { useNavigate, useLocation } from "react-router-dom";
import ProdContext from "../../storage/ProdContext";

const Product: React.FC<{
  item: ProductType;
}> = ({ item }) => {
  const prodContext = useContext(ProdContext);

  const navigate = useNavigate();

  return (
    <Wrapper>
      <div onClick={() => navigate(`/shop/${item.id}`)}>
        <img src={item.images[0]} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <IconButton
        aria-label="delete"
        id={`${item.id}`}
        onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
          prodContext.productHandler(e);
        }}
      >
        <DeleteIcon />
      </IconButton>
      {prodContext.wishProducts.includes(item) ? (
        <CustomButton>Added to wishlist</CustomButton>
      ) : (
        <CustomButton
          onClick={() => {
            prodContext.wishProductHandler(item);
          }}
        >
          Add to wishlist
        </CustomButton>
      )}
      {prodContext.cartProducts.includes(item) ? (
        <CustomButton> Added to Cart</CustomButton>
      ) : (
        <CustomButton
          onClick={() => {
            prodContext.cartProductHandler(item);
          }}
        >
          Add to Cart
        </CustomButton>
      )}
    </Wrapper>
  );
};

export default Product;
