import React, { useContext } from "react";
import { Wrapper } from "./Item.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import CustomButton from "../button/Button";
import { useNavigate } from "react-router-dom";
import ProdContext from "../../storage/ProdContext";
interface Iprops {
  item: ProductType;
}

const Product = ({ item }: Iprops) => {
  const prodContext = useContext(ProdContext);

  const navigate = useNavigate();

  return (
    <Wrapper>
      <div onClick={() => navigate(`/shop/${item._id}`)}>
        <img src={item.images[0]} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <IconButton
        aria-label="delete"
        id={`${item._id}`}
        onClick={() => {
          prodContext.productHandler(item);
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
      {prodContext.cartProducts?.includes(item) ? (
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
